import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import LoginForm from '../containers/auth/LoginForm';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <AuthTemplete>
      <Helmet>
        <title>로그인하기 - MYWORLD</title>
      </Helmet>
      <LoginForm type="login"></LoginForm>
    </AuthTemplete>
  );
};

export default LoginPage;
