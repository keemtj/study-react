import React, { useState, useRef } from 'react';
import TodolistSample from './TodolistSample';

const TodoSample = ({ board, removeBoard }) => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);
  const inputFocus = useRef(null);
  const onChange = (e) => setInput(e.target.value);

  const onClick = () => {
    addTodolist();
    inputFocus.current.focus();
    onReset();
  };

  const onReset = () => setInput('');

  const addTodolist = () => {
    setNextId((nextId) => nextId + 1);
    const nextTodo = todos.concat({
      id: nextId,
      content: input,
      active: false,
    });
    setTodos(nextTodo);
  };

  const removeTodolist = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div onClick={() => removeBoard(board._id)}>{board.title}</div>
      <ul>
        {todos.map((todo) => (
          <TodolistSample
            key={todo.id}
            todo={todo}
            removeTodolist={removeTodolist}
          />
        ))}
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
