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

      {/**

      1. TodoList component를 만들고 그 안에서 Todo 컴포넌트를 만들도록 수정
      2. Board.scss 수정
      3. TodoList.scss 생성 및 Todo.scss 수정
      depth: Board.js -> TodoList.js -> Todo.js
      
      */}

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
