import React from 'react';
import './Board.scss';
import { MdClear, MdAdd } from 'react-icons/md';
import Todo from './Todo';

const Board = () => {
  return (
    <li className="board">
      <div>
        board name(temp)
        <button>
          <MdClear />
        </button>
      </div>
      <input type="text" placeholder="Add New Todo!" />
      <button>
        <MdAdd />
      </button>
      <ul className="todolist">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </li>
  );
};

export default Board;
