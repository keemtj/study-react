import * as api from '../api/posts';
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
  craetePromiseSaga,
  createPromiseSagaById,
} from '../lib/asyncUtils';
import { call, put, takeEvery, getContext, select } from 'redux-saga/effects';

// action
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const GO_TO_HOME = 'GO_TO_HOME';

const CLEAR_POST = 'CLAER_POST';

const PRINT_STATE = 'PRINT_STATE';

// ! Saga를 위한 action creator
// action creator
export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });

export const goToHome = () => ({ type: GO_TO_HOME });
export const printState = () => ({ type: PRINT_STATE });

// ! saga(generator)
const getPostsSaga = craetePromiseSaga(GET_POSTS, api.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, api.getPostById);

// function* getPostsSaga() {
//   try {
//     const posts = yield call(api.getPosts);
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: posts,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POSTS_ERROR,
//       payload: e,
//       error: true,
//     });
//   }
// }

// function* getPostSaga(action) {
//   const id = action.payload;
//   try {
//     const post = yield call(api.getPostById, id);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post,
//       meta: id,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_ERROR,
//       payload: e,
//       error: true,
//       meta: id,
//     });
//   }
// }

function* goToHomeSaga() {
  console.log('======================', getContext('history'));
  const history = yield getContext('history');
  console.log(history);
  history.push('/');
}

function* printStateSaga() {
  // 현재 상태에 따라 조건부로 작업을 해야할 때 select effect를 사용하여 현재 상태를 조회한다
  const state = yield select((state) => state);
  console.log(state);
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

// ! Thunk
// api를 요청하여 처리하는 thunk 작성
// action creator 대신에 thunk 작성
// export const getPosts = createPromiseThunk(GET_POSTS, api.getPosts);

// api를 요청하여 처리하는 thunk 작성
// export const getPost = createPromiseThunk(GET_POST, api.getPostById);
// ! meta값을 id로 전달해주면 나중에 리듀서에서 이 id를 참고해서 상태를 업데이트 해줄 예정
// export const getPost = createPromiseThunkById(GET_POST, api.getPostById);
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST, meta: id });
//   try {
//     const payload = await api.getPostById(id);
//     dispatch({ type: GET_POST_SUCCESS, payload, meta: id });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_ERROR,
//       payload: e,
//       error: true,
//       meta: id,
//     });
//   }
// };
// export const goToHome = () => (dispatch, getState, action) => {
//   // 단순히 홈으로 이동하게 했지만
//   // getState를 사용해서 현재 상태를 조회하고 그에 따른 조건부로 이동하거나
//   // 비동기작업(api)를 호출하고나서 결과물에 따라 조건부로 페이지 전환을 한다거나 해서 구현 할 수 있다
//   console.log(action);
//   action.history.push('/');
// };

export const clearPost = () => ({ type: CLEAR_POST });

// initialState
const initialState = {
  posts: reducerUtils.initial(),
  // post: reducerUtils.initial(),
  post: {},
};
/** 기존의 initialState
 * post의 경우 id에 따른 데이터를 불러오기 때문에
 * 새로운 데이터를 불러오게 되면 기존 상태에 새로운 상태를 덮어씌우게 된다
 * 데이터 캐싱이 불가능
{
  posts: {
    data,
    loading,
    error,
  },
  post: {
    data,
    loading,
    error,
  },
}
*/
/* 변경된 initialState
{
  posts: {
    data,
    loading,
    error,
  },
  post: {
    '1': {
      data,
      loading,
      error
    },
    '2': {
      data,
      loading,
      error
    },
    [id]: {
      data,
      loading,
      error
    }
  },
}
*/

// ! 3번째 Parameter로 기존데이터가 존재한다는 true를 넣어준다
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
// const getPostReducer = handleAsyncActions(GET_POST, 'post');
// const getPostReducer = (state, action) => {
//   // meta로 넣어둔 아이디를 통해 loading일 때 id가 있는지 확인 가능
//   const id = action.meta;
//   switch (action.type) {
//     case GET_POST:
//       return {
//         ...state,
//         post: {
//           ...state.post,
//           [id]: reducerUtils.loading(state.post[id] && state.post[id].data),
//         },
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: {
//           ...state.post,
//           [id]: reducerUtils.success(action.payload),
//         },
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: {
//           ...state.post,
//           [id]: reducerUtils.error(action.payload),
//         },
//       };
//     default:
//       return state;
//   }
// };
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);

// reducer
const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(), // 뒤로가기 할 때 초기화
      };
    default:
      return state;
  }
};

export default posts;
