import React from 'react';
import Header from '../Molecules/Header';
import LoginForm from '../Molecules/LoginForm';

function LoginTemplate(props) {
  console.log('[LoginTemplate] =>', props);
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}

export default LoginTemplate;
