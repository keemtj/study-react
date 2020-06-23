import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';

const App = () => {
  // 모든 상태관리는 app에서
  const loginState = false;
  return (
    <>
      <Header loginState={loginState} />
      {loginState ? <Main /> : <Login />}
    </>
  );
};

export default App;
