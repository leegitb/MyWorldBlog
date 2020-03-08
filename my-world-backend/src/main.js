require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
// import createFakeData from './createFakeData';

//비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env; // process 오류남

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
    // createFakeData();
  })
  .catch(e => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

//라우터 설정
router.use('/api', api.routes()); //api route 적용

//라우터 적용 전 bodyParser, jwtMiddleware 적용
app.use(bodyParser());
app.use(jwtMiddleware);

//app instance router 적용
app.use(router.routes()).use(router.allowedMethods());

// PORT가 지정되어 있지 않다면 4000 사용
const port = PORT || 4000;

app.listen(port, () => {
  console.log('Listening to port %d...', port);
});
