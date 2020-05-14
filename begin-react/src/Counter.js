// useState

// import React, { useState } from 'react';

// function Counter() {
//   const [number, setNumber] = useState(1);

//   const onIncrease = () => {
//     // 어떻게 업데이트 할것이다~ 라는 로직을 넣어 줄 수도 있다
//     // 함수형 업데이트(최적화와 관련이 있다)
//     // setNumber(number + 1);
//     setNumber((prevNumber) => prevNumber + 1);
//   };
//   const onDecrease = () => {
//     setNumber(number - 1);
//     // setNumber((prevNumber) => prevNumber - 1);
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;

// useReducer

import React, { useReducer } from 'react';

// 1. recuder 함수 만들기
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  // 2. useReducer
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
