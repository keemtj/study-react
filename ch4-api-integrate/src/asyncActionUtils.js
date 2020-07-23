// Refactoring UserContext.js

// 1. initialState
export const initialAsyncState = {
  // loading: loading state = default = false
  // data: 결과값 = default = null
  // error: error = default = null
  // users api 요청한 결과를 담을 예정
  loading: false,
  data: null,
  error: null,
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (e) => ({
  loading: false,
  data: null,
  error: e,
});

// 2. reducer
// 하나의 리듀서를 만들어 주는 함수
// reducer를 더 편하게 작성할 수 있도록 하는 함수
// type: action type
// key: state 안에 들어있는 객체의 key

// GET_USERS => type
// GET_USERS_SUCCESS => ${type}_SUCCESS
// GET_USERS_ERROR => ${type}_ERROR

// GET_USER => type
// GET_USER_SUCCESS => ${type}_SUCCESS
// GET_USER_ERROR  => ${type}_ERROR
export function createAsyncHandler(type, key) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR}`;

  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  }

  return handler;
}

// 3. api
// api 요청시 try-catch형태의 틀을 가진 함수

// api만 요청하는 것이 아니라 api를 요청하기 전에 특정 action을 dispatch하고
// api가 성공하거나 실패했을 때도 특정 action을 dispatch한다
// 추후 이 함수를 호출하게 될때 파라미터로 받아와서 사용
// type: action type
// promiseFn: api call function
export default function createAsyncDispatcher(type, promiseFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR}`;

  // actionHandler(dispatch, 1, 2, 3)으로 호출하게 되면
  // ...rest안에 1,2,3이 들어있게 된다
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type });
    try {
      const data = await promiseFn(...rest);
      dispatch({ type: SUCCESS, data });
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  }

  return actionHandler;
}
