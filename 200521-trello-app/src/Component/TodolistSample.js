import React from 'react';

const TodolistSample = ({ todo, removeTodolist }) => {
  const { id, content } = todo;
  return (
    <>
      <li>{content}</li>
      <button>토글</button>
      <button onClick={() => removeTodolist(id)}>삭제</button>
    </>
  );
};

export default TodolistSample;
