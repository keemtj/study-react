import React, { useState, useRef } from 'react';
import TodolistSample from './TodolistSample';

const TodoSample = ({ todos, setTodos, board, removeBoard }) => {
  const { _id, title } = board;
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(0);
  const inputFocus = useRef(null);
  const onChange = (e) => setInput(e.target.value);

  const onClick = () => {
    console.log(_id);
    console.log(input.id);
    //
    if (_id !== input.id) return;
    addTodolist();
    inputFocus.current.focus();
    onReset();
  };

  const onReset = () => setInput('');

  const addTodolist = () => {
    setNextId((nextId) => nextId + 1);
    const nextTodo = todos.concat({
      parentId: _id,
      id: nextId,
      content: input,
      active: false,
    });
    setTodos(nextTodo);
    console.log(todos);
  };

  const removeTodolist = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div>
        {title}
        <button onClick={() => removeBoard(_id)}>보드 삭제</button>
        <ul>
          {todos.map((todo) => (
            <TodolistSample
              key={todo.id}
              todo={todo}
              removeTodolist={removeTodolist}
              board={board}
            />
          ))}
        </ul>
      </div>
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
