import React from 'react';
import './Main.scss';
import { MdAdd } from 'react-icons/md';
import Board from './Board';

const Main = () => {
  return (
    <div className="main-wrap">
      <div className="board-add">
        <div>New Board</div>
        <input type="text" placeholder="Add New Board :)" />
        <button type="button">
          <MdAdd />
        </button>
      </div>
      <ul className="board-wrap">
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
      </ul>
    </div>
  );
};

export default Main;
