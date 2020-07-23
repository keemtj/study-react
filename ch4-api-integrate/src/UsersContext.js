import React, { createContext, useReducer, useContext } from 'react';
import * as api from './api';
import createAsyncDispatcher from './asyncActionUtils';

const initialState = {
  // loading: loading state
  // data: 결과값
  // error: error
  // users api 요청한 결과를 담을 예정
  users: {
    loading: false,
    data: null,
    error: null,
  },
  // 특정 user를 담을 예정
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (e) => ({
  loading: false,
  data: null,
  error: e,
});

// reducer
// GET_USERS
// GET_USERS_SUCCESS
// GET_USERS_ERROR
// GET_USER
// GET_USER_SUCCESS
// GET_USER_ERROR
function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState,
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data),
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error),
      };
    case 'GET_USER':
      return {
        ...state,
        user: loadingState,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data),
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error),
      };
    default:
      throw new Error('Unhandled action type', action.type);
  }
}

// state, dispatch context를 따로 만듦
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

// useContext hook으로 꺼내서 쓸수 있으나
// useUsersState, useUsersDispatch custom hook으로 나누어서 만듦
export function useUsersState() {
  const state = useContext(UsersStateContext);
  // error 처리
  if (!state) {
    throw new Error('Cannot find UserProvider');
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  // error 처리
  if (!dispatch) {
    throw new Error('Cannot find UserProvider');
  }
  return dispatch;
}

// api만 요청하는 것이 아니라 api를 요청하기 전에 특정 action을 dispatch하고
// api가 성공하거나 실패했을 때도 특정 action을 dispatch한다
// 추후 이 함수를 호출하게 될때 파라미터로 받아와서 사용
export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
