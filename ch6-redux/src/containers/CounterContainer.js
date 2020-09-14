import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

const CounterContainer = () => {
  // useSelector에서 상태를 가져와서 새로운 객체를 생성하기때문에 리렌더링이 발생
  // 최적화를 위한 방법
  // 1. useSelector를 여러번 하여 하나의 상태만 조회
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);
  // 2. left, right를 통해 객체 안의 모든 값을 비교해준다
  // 2-1. 그러나 이러한 작성은 매번 하기 힘들기 때문에 react-redux안에 있는 shallowEqual을 사용한다
  // 2-2. shallowEqual은 항상 모든 값을 비교해주는 것은 아니다. 그이유는 이름처럼 얕은 비교만 하기 때문이다.
  // 2-3. 그렇기 때문에 리덕스쪽에서 불변성을 유지해야 한다.
  // 내용이 많거나, list안에 엄청나게 많은 항목이 들어있거나, 렌더링 자체가 엄청나게 빈번하게 발생할때에는 최적화를 고민해볼 필요가 있다.

  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual,
    // (left, right) => {
    //   return left.diff === right.diff && left.number === right.number;
    // },
  );
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (e) => dispatch(setDiff(parseInt(e.target.value, 10)));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
