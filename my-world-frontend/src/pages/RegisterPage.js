import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => {
  return (
    <AuthTemplete>
      <AuthForm type="register"></AuthForm>
    </AuthTemplete>
  );
};

export default RegisterPage;
