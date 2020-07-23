// api 요청시 try-catch형태의 틀을 가진 함수
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

// reducer를 더 편하게 작성할 수 있도록 하는 함수
// type: action type
// key: state 안에 들어있는 객체의 key
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
