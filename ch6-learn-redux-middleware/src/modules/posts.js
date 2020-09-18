import * as api from '../api/posts';
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncActions,
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
export const getPost = createPromiseThunk(GET_POST, api.getPostById);
export const clearPost = () => ({ type: CLEAR_POST });

// initialState
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// ! 3번째 Parameter로 기존데이터가 존재한다는 true를 넣어준다
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActions(GET_POST, 'post');

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
