import React from 'react';
import './Main.scss';
import { MdAdd } from 'react-icons/md';
import Board from './Board';

const Main = ({
  newBoardInput,
  onChangeNewBoard,
  onClickNewBoard,
  boards,
  onRemoveBoard,
  todos,
  todoInput,
  onChangeTodoInput,
  onClickAddTodo,
  onClickRemoveTodo,
}) => {
  return (
    <div className="main-wrap">
      <div className="board-add">
        <div>New Board</div>
        <input
          type="text"
          placeholder="Add New Board :)"
          name="newboard"
          value={newBoardInput}
          onChange={onChangeNewBoard}
        />
        <button type="button" onClick={onClickNewBoard}>
          <MdAdd />
        </button>
      </div>
      <ul className="board-wrap">
        {/* 보드를 map으로 뿌려줄 때, 보드 아이디를 가진 투두도 각 보드 컴포넌트에 넘기도록  */}
        {boards.map((board) => (
          <Board
            key={board.id}
            board={board}
            onRemoveBoard={onRemoveBoard}
            todos={todos}
            todoInput={todoInput}
            onChangeTodoInput={onChangeTodoInput}
            onClickAddTodo={onClickAddTodo}
            onClickRemoveTodo={onClickRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
