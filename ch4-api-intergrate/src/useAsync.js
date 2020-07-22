import { useReducer, useEffect, useCallback } from 'react';

// action: LOADING, SUCCESS, ERROR
// 리듀서함수가 생기면서 코드가 길어졌지만 따로 파일분리가 가능하다
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

/*
  - custom hook
  1. callback: Api를 호출하는 함수를 넣어줌
  2. deps: 나중에 useEffect를 사용해서 컴포넌트가 로딩됐을 때 혹은 어떤 값이 변경됐을 때
           api를 재요청할건데 그 useEffect의 두번째 파라미터에 넣는 그 deps를 그대로 사용
*/
function useAsync(callback, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  // useCallback: fetchData를 매번 새로 만드는 것이 아니라 한번 만들고 재사용하게끔 가능
  // 생략해도 상관없음
  const fetchData = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  }, [callback]);

  // deps가 빈 배열일 경우 컴포넌트가 처음 렌더링 될때만 fetchData를 호출
  // 만약에 deps에 특정 상태를 받아오게 되면 그 특정 상태가 바뀔 때마다 리렌더링이 발생
  useEffect(() => {
    fetchData();
    // 문맥상 deps가 잘못되었기 때문에 eslint에서 경고 문구를 띄워줌
    // 그러나 이 코드의 경우 파라미터로 받아올 것을 예상하고 만든 것이기 때문에 문제가 없음
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;
