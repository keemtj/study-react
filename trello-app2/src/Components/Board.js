import React, { useState, useRef } from 'react';
import NewBoard from './NewBoard';
import Card from './Card';

const Board = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  const [boardNames, setBoardNames] = useState([
    {
      cardId: 1,
      cardName: '보드제목입니다',
    },
  ]);

  const cardIdGen = () =>
    boardNames.length
      ? Math.max(
          ...boardNames.map(
            (boardname) => boardname.cardId,
          ),
        ) + 1
      : 1;

  const onKeyPress = ({ target, charCode }) => {
    if (charCode === 13 && target.value !== '') {
      setBoardNames([
        ...boardNames,
        {
          cardId: cardIdGen(),
          cardName: input,
        },
      ]);
      inputRef.current.value = '';
      // setInput('');
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
        inputRef={inputRef}
        input={input}
      />
      <Card />
    </div>
  );
};

export default Board;
