// action type 정의
// action type = 대문자, 문자열 = '모듈 이름/액션 이름'
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action function
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// counter module's initial state
const initialState = {
  number: 0,
};

// reducer function
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
