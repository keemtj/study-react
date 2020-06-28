import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';

const App = () => {
  // Users State
  // Login시도에서 일치하는 user를 식별하는 함수 필요
  // logout시도에서 active상태를 변경하는 함수 필요
  const [users, setUsers] = useState({
    id: 1,
    userId: 'Jay',
    userPw: '1234',
    active: false,
  });
  const { userId, userPw, active } = users;

  // Login State
  const [loginState, setLoginState] = useState(false);

  // Login id, password input State
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  // New Board State
  const [newBoardInput, setNewBoardInput] = useState('');

  // Board State
  const [boards, setBoards] = useState([
    // {
    //   id: 1,
    //   text: 'board 1',
    // },
    // {
    //   id: 2,
    //   text: 'board 2',
    // },
  ]);

  // board id State
  const [boardNextId, setBoardNextId] = useState(0);

  // Login Event
  const onChange = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    if (userId !== inputs.id || userPw !== inputs.password)
      return alert('check your accounts');
    setUsers({
      ...users,
      active: !active,
    });
    setInputs({
      id: '',
      password: '',
    });
    setLoginState(!loginState);
  };

  // Logout Event
  const onClickLogout = () => {
    if (loginState === false) return;
    // 모달을 통해 정말로 로그아웃을 할 것인지 물어보는 문구 추가 기능 필요
    setUsers({
      ...users,
      active: !active,
    });
    setLoginState(!loginState);
  };

  // Add board Event
  const onChangeNewBoard = ({ target }) => {
    setNewBoardInput(target.value);
  };

  const onClickNewBoard = () => {
    setBoardNextId((boardNextId) => boardNextId + 1);
    setBoards(boards.concat({ id: boardNextId, text: newBoardInput }));
    setNewBoardInput('');
  };

  // Remove board Event
  const onRemoveBoard = (id) => {
    // id === board.id
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <>
      <Header
        loginState={loginState}
        onClickLogout={onClickLogout}
        users={users}
      />
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
