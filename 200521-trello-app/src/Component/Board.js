import React, { useState } from 'react';
import TodoSample from './TodoSample';

const Board = () => {
  const [boards, setBoards] = useState([]);
  const [nextBoardId, setNextBoardId] = useState(2);
  const [boardInput, setBoardInput] = useState('');

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
      {boards.map((board) => (
        <TodoSample key={board._id} removeBoard={removeBoard} board={board} />
      ))}
    </div>
  );
};

export default Board;
