import React from 'react';
import './Board.scss';
import { MdClear, MdAdd } from 'react-icons/md';

import Todo from './Todo';

const Board = ({
  board,
  onRemoveBoard,
  todos,
  todoInput,
  onChangeTodoInput,
  onClickAddTodo,
  onClickRemoveTodo,
}) => {
  return (
    <li className="board">
      <div>
        {board.text}
        <button onClick={() => onRemoveBoard(board.id)}>
          <MdClear />
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onClickRemoveTodo={onClickRemoveTodo}
          />
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add New Todo!"
        value={todoInput}
        onChange={onChangeTodoInput}
      />
      <button type="button" onClick={onClickAddTodo}>
        <MdAdd />
      </button>
    </li>
  );
};

export default Board;
