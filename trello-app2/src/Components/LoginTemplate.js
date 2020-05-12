import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';

const LoginTemplate = ({
  onClickLogout,
  headerState,
  inputs,
  onChange,
  userCheck,
}) => {
  return (
    <>
      <Header
        onClickLogout={onClickLogout}
        headerState={headerState}
      />
      <LoginForm
        inputs={inputs}
        onChange={onChange}
        userCheck={userCheck}
      />
    </>
  );
};

export default LoginTemplate;
