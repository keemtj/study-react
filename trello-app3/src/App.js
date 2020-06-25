import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';

const App = () => {
  // State
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
  const [loginState, setLoginState] = useState(false);
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = () => {
    setLoginState(!loginState);
    setInputs({
      id: '',
      password: '',
    });
  };
  const onClickLogout = () => {
    if (loginState === false) return;
    // 모달을 통해 정말로 로그아웃을 할 것인지 물어보는 문구 추가 기능 필요
    setLoginState(!loginState);
  };
  return (
    <>
      <Header loginState={loginState} onClickLogout={onClickLogout} />
      {!loginState ? (
        <Login inputs={inputs} onChange={onChange} onClick={onClick} />
      ) : (
        <Main />
      )}
    </>
  );
};

export default App;
