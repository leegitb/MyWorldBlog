/* 
로그인 상태 확인 미들웨어 
*/
const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401; // Unathorized
    return;
  }
  return next();
};

export default checkLoggedIn;
