import Joi from '@hapi/joi';
import User from '../../models/user';

/* 
회원가입
POST /api/auth/register
{
    username: 'myname',
    password: 'mypassword'
}
*/
export const register = async ctx => {
  const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    // username이 이미 존재하는지 확인. (중복 계정 생성 불가)
    const exists = await User.findByUserName(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      username,
    });
    await user.setPassword(password); // password 설정
    await user.save(); // DB에 저장
    ctx.body = user.serialize(); // 응답할 데이터에서 hashedPassword 필드 제거

    const token = user.generateToken(); // 사용자 token 쿠키에 담아 사용
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 
로그인
POST /api/auth/login
{
    username: 'myname',
    password: 'mypassword'
}
*/
export const login = async ctx => {
  const { username, password } = ctx.request.body;

  // username, password가 없다면 에러 처리
  if (!username || !password) {
    ctx.status = 401; // undefined
    return;
  }

  try {
    const user = await User.findByUserName(username);
    // 계정이 없다면 에러처리
    if (!user) {
      ctx.status = 401; // undefined
      return;
    }
    // 잘못된 비밀번호
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401; // undefined
      return;
    }
    ctx.body = user.serialize();

    const token = user.generateToken(); // 사용자 token 쿠키에 담아 사용
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
로그인 상태 확인
GET api/auth/check
*/
export const check = async ctx => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인 중이 아니면
    ctx.status = 401; // undefined
    return;
  }
  ctx.body = user;
};

/*
로그아웃
POST api/auth/logout
*/
export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // no Content
};
