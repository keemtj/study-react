import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';

const LoginTemplate = ({ inputs, onChange, userCheck }) => {
  return (
    <>
      <Header />
      <LoginForm
        inputs={inputs}
        onChange={onChange}
        userCheck={userCheck}
      />
    </>
  );
};

export default LoginTemplate;
