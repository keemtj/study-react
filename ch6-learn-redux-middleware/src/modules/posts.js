import * as postsAPI from '../api/posts';
import { reducerUtils } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// api를 요청하여 처리하는 thunk 작성
// action creator 대신에 thunk 작성
export const getPosts = () => async (dispatch, getState) => {
  console.log('getState:', getState);
  // 요청이 시작됨
  dispatch({ type: GET_POSTS });
  // API를 호출
  try {
    // 성공했을 때
    const posts = await postsAPI.getPosts();
    dispatch({
      type: GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    // 실패했을 때
    dispatch({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
};

// api를 요청하여 처리하는 thunk 작성
export const getPost = (id) => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POST });
  // API를 호출
  try {
    // 성공했을 때
    const post = await postsAPI.getPostById(id);
    dispatch({
      type: GET_POST_SUCCESS,
      post,
    });
  } catch (e) {
    // 실패했을 때
    dispatch({
      type: GET_POST_ERROR,
      error: e,
    });
  }
};

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
        posts: reducerUtils.success(action.posts),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.error),
      };

    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.post),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
};

export default posts;
