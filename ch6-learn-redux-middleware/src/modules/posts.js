import * as api from '../api/posts';
import { reducerUtils, createPromiseThunk } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// api를 요청하여 처리하는 thunk 작성
// action creator 대신에 thunk 작성
export const getPosts = createPromiseThunk(GET_POSTS, api.getPosts);

// api를 요청하여 처리하는 thunk 작성
export const getPost = createPromiseThunk(GET_POST, api.getPostById);

// initialState
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// reducer
const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        // 기존 상태를 유지하고 싶으면 state.posts.data를 넣어준다.
        // posts: reducerUtils.loading(state.posts.data),
        posts: reducerUtils.loading(),
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.payload),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.payload),
      };

    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.payload),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.payload),
      };
    default:
      return state;
  }
};

export default posts;
