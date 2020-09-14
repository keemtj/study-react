import React from 'react';

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onSetDiff} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
