import React from 'react';
import List from './List';

// 보드네임 리스트와 카드의 id일치
const Card = ({ boardName }) => {
  const onRemove = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <span>{boardName.boardname}</span>
      &nbsp;&nbsp;
      <span onClick={onRemove}>지우기</span>
      <ul>
        <List />
      </ul>
    </div>
  );
};

export default Card;
