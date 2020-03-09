import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = () => {
  return (
    <AuthTemplete>
      <AuthForm type="login"></AuthForm>
    </AuthTemplete>
  );
};

export default LoginPage;
