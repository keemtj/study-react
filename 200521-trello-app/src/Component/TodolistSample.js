import React from 'react';

const TodolistSample = ({ todos, removeTodolist }) => {
  console.log(todos);
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.content}
          <button>토글</button>
          <button onClick={removeTodolist}>삭제{todo.id}</button>
        </li>
      ))}
    </>
  );
};

export default TodolistSample;
