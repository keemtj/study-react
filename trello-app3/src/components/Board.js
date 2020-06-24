import React from 'react';
import './Board.scss';

const Board = () => {
  return (
    <li className="board">
      <div>board name</div>
      <button>remove board</button>
      <ul>
        <li>todo1</li>
        <li>todo2</li>
        <li>todo3</li>
        <li>todo4</li>
        <li>todo4</li>
        <li>todo4</li>
        <li>todo4</li>
      </ul>
      <input type="text" />
      <button>add todo</button>
    </li>
  );
};

export default Board;
