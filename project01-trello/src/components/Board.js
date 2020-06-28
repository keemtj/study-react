import React, { useState } from 'react';
import './Board.scss';
import Todo from './Todo';
import { MdClear, MdAdd } from 'react-icons/md';

const Board = ({ board, onRemoveBoard }) => {
  // todos State
  const [todos, setTodos] = useState([
    // {
    //   id: todoNextId,
    //   boardId: id,
    //   content: todoInput,
    // },
  ]);

  // todo input State
  const [todoInput, setTodoInput] = useState('');

  // todo next id State
  const [todoNextId, setTodoNextId] = useState(0);

  // Todo input Event
  const onChangeTodoInput = ({ target }) => {
    setTodoInput(target.value);
  };

  // Add Todo Event
  const onClickAddTodo = (id) => {
    // id === board.id
    setTodoNextId((todoNextId) => todoNextId + 1);
    setTodos(
      todos.concat({
        id: todoNextId,
        boardId: id,
        content: todoInput,
      }),
    );
    setTodoInput('');
  };

  // Remove todo Event
  const onClickRemoveTodo = (id) => {
    // id === board.id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li className="board">
      <div>
        {board.text}
        <button onClick={() => onRemoveBoard(board.id)}>
          <MdClear />
        </button>
      </div>
      <ul>
        {/* board id와 일치하는 todo를 렌더링, todo의 기본 상태값에 board id도 포함 */}
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
