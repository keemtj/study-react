// type: action type,
// promiseCreator: api call function
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // return value; = thunk creator;
  // async부분부터 thunk;
  return (param) => async (dispatch, getState) => {
    console.log(getState().counter);
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
      });
    }
  };
};
const defaultIdSelector = (param) => param;
export const createPromiseThunkById = (
  type,
  promiseCreator,
  idSelector = defaultIdSelector,
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (param) => async (dispatch, getState) => {
    const id = idSelector(param);
    dispatch({ type, meta: id });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
        meta: id,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
        meta: id,
      });
    }
  };
};
// initialState
export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  // ! parameter가 아무것도 안주어졌을 때 기본값을 null로 설정하여
  // ! loading함수가 호출되어 상태객체를 만들 때 기존 데이터가 초기화 되고 있다
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (data) => ({
    loading: false,
    data,
    error: null,
  }),
  error: (error) => ({
    data: null,
    loading: false,
    error,
  }),
};

// ! keepData = 기존 데이터를 유지하는 지 여부
export const handleAsyncActions = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  // return reducer
  return (state, action) => {
    // update
    switch (action.type) {
      case type:
        console.log(
          '처음 컴포넌트가 렌더링 될때 기존 데이터가 있었는지 확인:',
          state[key].data,
        );
        return {
          ...state,
          // ! 기존 데이터를 갖고 있으면 그 데이터를 파라미터로 넘겨주고 아닐 경우에는 null
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

export const handleAsyncActionsById = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  // return reducer
  return (state, action) => {
    const id = action.meta;
    // update
    switch (action.type) {
      case type:
        console.log(
          '처음 컴포넌트가 렌더링 될때 기존 데이터가 있었는지 확인:',
          state[key].data,
        );
        return {
          ...state,
          // ! 기존 데이터를 갖고 있으면 그 데이터를 파라미터로 넘겨주고 아닐 경우에는 null
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              keepData ? state[key][id] && state[key][id].data : null,
            ),
          },
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          },
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload),
          },
        };
      default:
        return state;
    }
  };
};
