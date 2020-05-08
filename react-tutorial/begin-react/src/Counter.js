import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(1);

  const onIncrese = () => {
    // 어떻게 업데이트 할것이다~ 라는 로직을 넣어 줄 수도 있다
    // 함수형 업데이트(최적화와 관련이 있다)
    // setNumber(number + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    // setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrese}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
