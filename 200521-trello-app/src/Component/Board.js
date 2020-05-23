import React, { useState } from 'react';
import TodoSample from './TodoSample';

const Board = () => {
  const [boardInput, setBoardInput] = useState('');
  const [boards, setBoards] = useState([]);
  const [nextBoardId, setNextBoardId] = useState(0);
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setBoardInput(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      setBoardInput('');
      addBoard();
    }
  };

  const addBoard = () => {
    setNextBoardId((nextBoardId) => nextBoardId + 1);
    const nextBoard = boards.concat({
      _id: nextBoardId,
      title: boardInput,
    });
    setBoards(nextBoard);
  };

  const removeBoard = (id) => {
    setBoards(boards.filter((board) => board._id !== id));
  };

  return (
    <div>
      <div>New Board</div>
      <input
        type="text"
        placeholder="보드 제목을 입력하세요"
        value={boardInput}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {/* 보드를 map으로 뿌려줄 때, 보드 아이디를 가진 투두도 각 보드 컴포넌트에 넘기도록  */}
      {boards.map((board) => (
        <TodoSample
          key={board._id}
          removeBoard={removeBoard}
          board={board}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default Board;
