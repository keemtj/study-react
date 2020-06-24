import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      userId: 'q',
      userPw: 'q',
      active: false,
    },
    {
      id: 2,
      userId: 'w',
      userPw: 'w',
      active: false,
    },
  ]);

  const loginState = false;

  return (
    <>
      <Header loginState={loginState} />
      {loginState ? <Main /> : <Login />}
    </>
  );
};

export default App;
