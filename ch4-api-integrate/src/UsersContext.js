import React, { createContext, useReducer, useContext } from 'react';
import * as api from './api';
import createAsyncDispatcher, {
  initialAsyncState,
  createAsyncHandler,
} from './asyncActionUtils';

// 1. initialState => refactoring
const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

// 2. reducer => refactoring
const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);
    default:
      throw new Error('Unhandled action type', action.type);
  }
}

// 3. context
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

// 4. custom hook
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

// 5. api call => refactoring
export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
