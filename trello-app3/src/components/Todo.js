import React from 'react';
import { MdClear } from 'react-icons/md';
import './Todo.scss';

const Todo = () => {
  return (
    <li className="list-item">
      <span>Todo</span>
      <button>
        <MdClear />
      </button>
    </li>
  );
};

export default Todo;
