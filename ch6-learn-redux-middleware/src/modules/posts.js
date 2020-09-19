import * as api from '../api/posts';
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
} from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLAER_POST';

// api를 요청하여 처리하는 thunk 작성
// action creator 대신에 thunk 작성
export const getPosts = createPromiseThunk(GET_POSTS, api.getPosts);
// api를 요청하여 처리하는 thunk 작성
// export const getPost = createPromiseThunk(GET_POST, api.getPostById);

// ! meta값을 id로 전달해주면 나중에 리듀서에서 이 id를 참고해서 상태를 업데이트 해줄 예정
export const getPost = createPromiseThunkById(GET_POST, api.getPostById);
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