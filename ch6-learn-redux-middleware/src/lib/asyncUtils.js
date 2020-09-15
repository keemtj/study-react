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

// initialState
export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
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

export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  // return reducer
  return (state, action) => {
    // update
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
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
