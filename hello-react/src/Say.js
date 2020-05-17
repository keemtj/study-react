import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');
  const onClickRed = () => setColor('red');
  const onClickGreen = () => setColor('green');
  const onClickBlue = () => setColor('blue');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button style={{ color: 'red' }} onClick={onClickRed}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={onClickGreen}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={onClickBlue}>
        파란색
      </button>
      <h1 style={{ color }}>{message}</h1>
    </div>
  );
};

export default Say;
