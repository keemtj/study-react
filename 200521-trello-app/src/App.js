import React, { useState } from 'react';
import LoginSample from './Component/LoginSample';
import Header from './Component/Header';
import Board from './Component/Board';

const App = () => {
  const [loginState, setLoginState] = useState(true);

  const onClickLogout = () =>
    loginState ? setLoginState(!loginState) : loginState;

  return (
    <>
      <Header loginState={loginState} onClickLogout={onClickLogout} />
      {loginState ? <Board /> : <LoginSample setLoginState={setLoginState} />}
    </>
  );
};

export default App;
