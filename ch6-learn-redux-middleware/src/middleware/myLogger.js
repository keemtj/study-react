const myLogger = (store) => (next) => (action) => {
  console.log('action이 리듀서에서 처리 전 상태:', store.getState());
  console.log('next로 처리 전 dispatch되는 action:', action);
  const result = next(action); // action을 다음 미들웨어, 다음 미들웨어가 없다면 reducer한테 전달하겠다
  console.log('next로 처리 후 dispatch되는 action:', result);
  console.log('action이 리듀서에서 처리 후 상태:', store.getState());
  return result; // container에서 dispatch됐을때 의 그 결과가 result
  // return Promise.resolve; // 를 하게되면 Promise를 받아오게 되는것
};

export default myLogger;

// const thunk = (store) => (next) => (action) =>
//   typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action);

// const myThunk = () => (dispatch, getState) => {
//   dispatch({ type: 'HELLO' });
//   dispatch({ type: 'BYE' });
// };

// dispatch(myThunk);
