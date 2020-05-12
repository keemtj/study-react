import React from 'react';
import Li from './List';

const Card = () => {
  return (
    <div>
      <span>보드제목</span>
      &nbsp;&nbsp;
      <span>지우기</span>
      <ul>
        <Li />
      </ul>
    </div>
  );
};

export default Card;
