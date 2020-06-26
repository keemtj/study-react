import React from 'react';
import './Board.scss';
import { MdClear, MdAdd } from 'react-icons/md';
import Todo from './Todo';

const Board = ({ board, onRemoveBoard }) => {
  return (
    <li className="board">
      <div>
        {board.text}
        <button onClick={() => onRemoveBoard(board.id)}>
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
