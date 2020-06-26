import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';

const App = () => {
  // Users State
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

  // Login State
  const [loginState, setLoginState] = useState(false);
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  // New Board State
  const [newBoardInput, setNewBoardInput] = useState('');

  // Board State
  const [boards, setBoards] = useState([
    {
      id: 1,
      text: 'board 1',
    },
  ]);

  // Login Event
  const onChange = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value,
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

  // New Board Event
  const onChangeNewBoard = ({ target }) => {
    setNewBoardInput(target.value);
  };

  const onClickNewBoard = () => {
    // new board input state를 초기화 하기 전에 add board list 코드 필요 o
    // id가 2로 고정된 상태 -> generate id 함수 필요 x
    setBoards(boards.concat({ id: 2, text: newBoardInput }));
    setNewBoardInput('');
  };

  // onRemoveBoard
  const onRemoveBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <>
      <Header loginState={loginState} onClickLogout={onClickLogout} />
      {!loginState ? (
        <Login inputs={inputs} onChange={onChange} onClick={onClick} />
      ) : (
        <Main
          newBoardInput={newBoardInput}
          onChangeNewBoard={onChangeNewBoard}
          onClickNewBoard={onClickNewBoard}
          boards={boards}
          onRemoveBoard={onRemoveBoard}
        />
      )}
    </>
  );
};

export default App;
