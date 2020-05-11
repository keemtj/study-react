import React, { useState, useRef } from 'react';
import './App.css';
import Child from './Child';

function Parent() {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  // 상태값을 바로 변수에 담아서 부모에서 상태관리(그릇에 담아서 넘겨준다)
  const parentLotto = lotto;
  // 참조할 깃발을 만들어주고 참조할 엘리먼트와 연결
  // 항상 input태그를 참조할 수 있다
  const inputRef = useRef();
  const makeLotto = () => {
    const lottoArray = [];
    let count = 0;
    const until = 7;
    while (true) {
      if (count === until) break;
      // eslint-disable-next-line radix
      const pop = parseInt(Math.random() * 45 + 1);
      if (lottoArray.indexOf(pop) < 0) {
        lottoArray.push(pop);
        count += 1;
      }
    }
    console.log(lottoArray);
    // makeLotto함수 로직에 따라 나온 배열을 setLotto 함수에 넣어 상태를 변경해준다
    setLotto(lottoArray);
    // setLotto(ParentLotto.map((number) => number + (Math.random() * 45 + 1)));
  };
  const changeInput = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div className="App">
      부모 컴포넌트
      <br />
      <button type="button" onClick={makeLotto}>
        로또 생성기
      </button>
      <br />
      <input type="text" ref={inputRef} onChange={changeInput} />
      <h1>{parentLotto.map((number) => `${number} `)}</h1>
      {/* props는 부모가 자식에게 주는 선물의 개념, 로또번호, 이름, 나이 */}
      <Child lotto={parentLotto}>
        <h1>자식의 자식</h1>
      </Child>
    </div>
  );
}

export default Parent;
