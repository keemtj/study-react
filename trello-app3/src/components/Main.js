import React from 'react';
import './Main.scss';
import { MdAdd } from 'react-icons/md';
import Board from './Board';

const Main = ({ newBoard, onChangeNewBoard, onClickNewBoard }) => {
  return (
    <div className="main-wrap">
      <div className="board-add">
        <div>New Board</div>
        <input
          type="text"
          placeholder="Add New Board :)"
          name="newboard"
          value={newBoard}
          onChange={onChangeNewBoard}
        />
        <button type="button" onClick={onClickNewBoard}>
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
