// action
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// ! 1.아래의 코드는 정확하게 얘기하면 전체가 thunk함수는 아니다
// ! 정확히는 2,3번으로 나누어 2번이 thunk함수이다
export const increaseAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

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
