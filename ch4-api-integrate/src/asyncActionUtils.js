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
