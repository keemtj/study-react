import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// // redux store state를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// // action function을 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// // export할 때 connect함수를 사용하여 CounterContainer 컴포넌트와 redux를 연동
// // connect함수는 새로운 함수를 리턴하여 파라미터로 redux와 연동할 컴포넌트를 받는다.
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// mapDispatchToProps함수와 mapDispatchToprops함수를
// connet함수 내부에 익명함수 형태로 선언 후 export
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch,
    ),
)(CounterContainer);
