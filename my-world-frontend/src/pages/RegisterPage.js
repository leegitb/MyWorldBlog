import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import RegisterForm from '../containers/auth/RegisterForm';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <AuthTemplete>
      <Helmet>
        <title>회원가입하기 - MYWORLD</title>
      </Helmet>
      <RegisterForm />
    </AuthTemplete>
  );
};

export default RegisterPage;
