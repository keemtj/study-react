import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';

const App = () => {
  // Users State
  // Login시도에서 일치하는 user를 식별하는 함수 필요
  // logout시도에서 active상태를 변경하는 함수 필요
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
    // {
    //   id: 1,
    //   text: 'board 1',
    // },
    // {
    //   id: 2,
    //   text: 'board 2',
    // },
  ]);

  // Add todo input State
  const [todoInput, setTodoInput] = useState('');

  // Todos State
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   boardId: 1,
    //   content: 'todo1',
    // },
    // {
    //   id: 2,
    //   boardId: 1,
    //   content: 'todo2',
    // },
  ]);

  // board id State
  const [boardNextId, setBoardNextId] = useState(0);
  // todo id State
  const [todoNextId, setTodoNextId] = useState(0);

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

  // Logout Event
  const onClickLogout = () => {
    if (loginState === false) return;
    // 모달을 통해 정말로 로그아웃을 할 것인지 물어보는 문구 추가 기능 필요
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

  // Todo input Event
  const onChangeTodoInput = ({ target }) => {
    setTodoInput(target.value);
  };

  // Add Todo Event
  const onClickAddTodo = (id) => {
    // id === board.id
    setTodoNextId((todoNextId) => todoNextId + 1);
    setTodos(
      todos.concat({
        id: todoNextId,
        boardId: id,
        content: todoInput,
      }),
    );
    setTodoInput('');
  };

  // Remove todo Event
  const onClickRemoveTodo = (id) => {
    // id === board.id
    setTodos(todos.filter((todo) => todo.id !== id));
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
          todos={todos}
          todoInput={todoInput}
          onChangeTodoInput={onChangeTodoInput}
          onClickAddTodo={onClickAddTodo}
          onClickRemoveTodo={onClickRemoveTodo}
        />
      )}
    </>
  );
};

export default App;
