import React, { useState } from 'react';
import NewBoard from './NewBoard';
import Card from './Card';

const Board = () => {
  const [input, setInput] = useState('');

  const [boardNames, setBoardNames] = useState([
    {
      boardId: 1,
      boardname: '보드제목입니다',
    },
  ]);

  const boardIdGen = () =>
    boardNames.length
      ? Math.max(
          ...boardNames.map(
            (boardname) => boardname.boardId,
          ),
        ) + 1
      : 1;

  const onKeyPress = ({ target, charCode }) => {
    if (charCode === 13 && target.value !== '') {
      setBoardNames([
        ...boardNames,
        {
          boardId: boardIdGen(),
          boardname: input,
        },
      ]);
      setInput('');
    }
  };

  const onChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <div>
      <NewBoard
        onChange={onChange}
        onKeyPress={onKeyPress}
        boardNames={boardNames}
        input={input}
      />

      {boardNames.map((boardName) => (
        <Card
          boardName={boardName}
          input={input}
          key={boardName.boardId}
        />
      ))}
    </div>
  );
};

export default Board;
