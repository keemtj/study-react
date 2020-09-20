// effects: redux-saga 미들웨어가 수행하도록 작업을 명령하는 거라고 이해할 수 있다
// delay: 대기하라는 명령
// put: 특정 액션을 dispatch하라는 명령
// takeEvery: generator 코드를 실행해야할 때 takeEvery effect를 사용
// takeLatest: 가장 마지막으로 들어온 것만 처리
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// action
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';
// action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// ! 기존에 thunk로 처리했던 것을 순수 객체로 바꿔줌
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });
// ! saga
function* increaseSaga() {
  yield delay(1000);
  // put은 dispatch랑 비슷
  // increase를 호출해서 increase action 객체를 만들고 그 액션을 디스패치하도록 Redux-saga 미들웨어에게 명령
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

// rootreducer를 만드는 것처럼 rootsaga를 만들어야 하기 때문에 export해준다
export function* counterSaga() {
  // INCREASE_ASYNC action이 dispatch 되면 increaseSaga()의 코드를 실행해준다
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // delay(1000)에 의해서 1초를 기다리고 있는 도중에 새로운 것이 들어온다면 기존 것은 무시하고 가장 마지막으로 들어온 것만 처리하겠다
  yield takeLatest(DECREASE_ASYNC, decreaseAsync);
}

// ! thunk
// ! 1.아래의 코드는 정확하게 얘기하면 전체가 thunk함수는 아니다
// ! getState가 필요할 경우에는 불러오지만 필요없으면 생략해도 된다
// ! 정확히는 2,3번으로 나누어 2번이 thunk함수이다
// export const increaseAsync = () => (dispatch, getState) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };
// export const decreaseAsync = () => (dispatch, getState) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

// // ! 2. thunk 함수
// // thunk function
// const increaseThunk = (dispatch, getState) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// const decreaseThunk = (dispatch, getState) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

// // ! 3. thunk creator
// // thunk creator
// export const increaseAsync = () => increaseThunk;
// export const decreaseAsync = () => decreaseThunk;

// initial state
const initialState = 0;

// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
