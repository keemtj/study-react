import React from 'react';
import { MdClear } from 'react-icons/md';
import './Todo.scss';

const Todo = ({ todo, onClickRemoveTodo }) => {
  console.log(todo);
  return (
    <li className="list-item">
      <span>{todo.content}</span>
      <button type="button" onClick={() => onClickRemoveTodo(todo.id)}>
        <MdClear />
      </button>
    </li>
  );
};

export default Todo;
