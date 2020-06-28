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
  console.log(board.id);
  return (
    <li className="board">
      <div>
        {board.text}
        <button onClick={() => onRemoveBoard(board.id)}>
          <MdClear />
        </button>
      </div>
      <ul>
        {/* 보드를 map으로 뿌려줄 때, 보드 아이디를 가진 투두도 각 보드 컴포넌트에 넘기도록  */}
        {/* {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onClickRemoveTodo={onClickRemoveTodo}
          />
        ))} */}
        {todos.map(
          (todo) =>
            todo.boardId === board.id && (
              <Todo
                key={todo.id}
                todo={todo}
                onClickRemoveTodo={onClickRemoveTodo}
              />
            ),
        )}
      </ul>
      <input
        type="text"
        placeholder="Add New Todo!"
        value={todoInput}
        onChange={onChangeTodoInput}
      />
      <button type="button" onClick={() => onClickAddTodo(board.id)}>
        <MdAdd />
      </button>
    </li>
  );
};

export default Board;
