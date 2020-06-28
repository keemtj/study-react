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
    {
      id: 1,
      text: 'board 1',
    },
  ]);

  // Add todo input State
  const [todoInput, setTodoInput] = useState('');

  // Todos State
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'todo1',
    },
    {
      id: 2,
      content: 'todo2',
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

  // Logout Event
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

  // Board Remove Event
  const onRemoveBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  // Board input TodoList Event
  const onChangeTodoInput = ({ target }) => {
    setTodoInput(target.value);
  };

  // Board add Todolist Event
  const onClickAddTodo = () => {
    setTodos(todos.concat({ id: 3, content: todoInput }));
    setTodoInput('');
  };

  const onClickRemoveTodo = (id) => {
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
