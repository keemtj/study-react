import React, { useState, useRef } from 'react';
import TodolistSample from './TodolistSample';

const TodoSample = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, content: '로그인폼 완성', active: false },
    { id: 2, content: '투두리스트 완성', active: false },
    { id: 3, content: '화면 전환', active: false },
  ]);
  const [nextId, setNextId] = useState(4);
  const inputFocus = useRef(null);

  const onChange = (e) => setInput(e.target.value);

  const onClick = () => {
    addTodolist();
    inputFocus.current.focus();
    onReset();
  };

  const onReset = () => setInput('');

  const addTodolist = () => {
    setNextId(nextId + 1);
    const nextTodo = todos.concat({
      id: nextId,
      content: input,
      active: false,
    });
    setTodos(nextTodo);
  };

  const removeTodolist = (id) => {
    console.log(id);
    const removeTodo = todos.filter((todo) => todo.id === id);
    setTodos(removeTodo);
  };
  return (
    <div>
      <h1>오늘의 할일</h1>
      <ul>
        <TodolistSample todos={todos} removeTodolist={removeTodolist} />
      </ul>
      <input
        type="text"
        placeholder="할일을 입력하세요"
        value={input}
        onChange={onChange}
        ref={inputFocus}
      />
      <button onClick={onClick}>목록 추가</button>
    </div>
  );
};

export default TodoSample;
