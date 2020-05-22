import React, { useState } from 'react';
import LoginSample from './Component/LoginSample';
import Header from './Component/Header';
import TodoSample from './Component/TodoSample';

const App = () => {
  const [loginState, setLoginState] = useState(false);

  const onClickLogout = () => {
    setLoginState(!loginState);
  };

  return (
    <>
      <Header loginState={loginState} onClickLogout={onClickLogout} />
      {loginState ? (
        <TodoSample />
      ) : (
        <LoginSample setLoginState={setLoginState} />
      )}
    </>
  );
};

export default App;
