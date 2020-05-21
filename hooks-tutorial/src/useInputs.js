import { useReducer, useCallback } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

// initialForm <- Info.js에서 useInputs()의 괄호안에 들어가는 초기 상태값
const useInputs = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    dispatch(e.target);
  }, []);

  return [state, onChange];
};

export default useInputs;
