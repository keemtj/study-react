import { createStore } from 'redux';

// DOMs
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// action name
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action 객체를 만드는 action function
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (diff) => ({ type: INCREASE, diff });
const decrease = () => ({ type: DECREASE });

// initial state
const initialState = {
  toggle: false,
  counter: 0,
};

// reducer function
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.diff,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// store
// dispatch가 호출되면 store는 reducer function을 실행시켜서 새로운 상태를 만들어 준다
const store = createStore(reducer);

// render function
const render = () => {
  const state = store.getState(); // store에서 현재 상태를 불러옴
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();

// store의 state가 바뀔 때마다 render function이 호출
store.subscribe(render);

// Events
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
