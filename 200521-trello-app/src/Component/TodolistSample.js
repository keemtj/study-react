import React from 'react';

const TodolistSample = ({ todo, removeTodolist }) => {
  const { id, content } = todo;
  // 상태관리 없음
  return (
    <li>
      {content}
      <button>토글</button>
      <button onClick={() => removeTodolist(id)}>삭제</button>
    </li>
  );
};

export default TodolistSample;
