import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplete>
      <RegisterForm />
    </AuthTemplete>
  );
};

export default RegisterPage;
