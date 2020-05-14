// import React, { useRef, useState, useMemo, useCallback } from 'react';
import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

// // useState
// // useCallback으로 감싸준 함수에서 상위 컴포넌트의 props로써 받은 함수(onDoSomething)를 쓸 경우 deps에 넣어주어야 한다
// function App() {
//   // 상태(state) 설정
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//   });

//   const { username, email } = inputs;

//   const onChange = useCallback(
//     (e) => {
//       const { name, value } = e.target;

//       setInputs({
//         ...inputs,
//         [name]: value,
//       });
//     },
//     [inputs],
//   );

//   // 컴포넌트의 상태로서 관리되어지고 있지 않아서 useState로 감싸서 상태로 관리
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'jay jay jay',
//       email: 'keemgreat@gmail.com',
//       active: true,
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false,
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false,
//     },
//   ]);

//   const nextId = useRef(4); // 리랜더링 되도 4라는 변수가 유지된다

//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       ...inputs,
//       // username,
//       // email,
//     };

//     // 배열에 항목 추가하기
//     setUsers((users) => [...users, user]);
//     // setUsers(users.concat(user));

//     setInputs({
//       username: '',
//       email: '',
//     });
//     // += 1바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다는 것이 중요
//     // console.log(nextId.current); // 4
//     nextId.current += 1;
//   }, [inputs]); // [username, email, users]

//   const onRemove = useCallback((id) => {
//     setUsers((users) => users.filter((user) => user.id !== id));
//   }, []);

//   const onToggle = useCallback((id) => {
//     setUsers((users) =>
//       users.map((user) =>
//         user.id === id ? { ...user, active: !user.active } : user,
//       ),
//     );
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성 사용자 수: {count}</div>
//     </>
//   );
// }

// useReducer
// 2. state 기본값
const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'jay',
      email: 'keemgreat@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
};
// 3. reducer 함수 만들기
// 상태 업데이트 함수
function reducer(state, action) {
  // 7. switch문 작성
  // initialState의 값이 state에 들어간다
  // action은 컴포넌트 내부의 dispatch의 action객체이다
  // return state;
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        // ... 불변성
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    // 12. CREATE_USER type에 대한 case 설정
    case 'CREATE_USER':
      return {
        // inputs: {
        //   username: '',
        //   email: ''
        // }
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    // 14. TOGGLE_USER case
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    // 15. REMOVE_USER case
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      // return state;
      throw new Error('Unhandled action');
  }
}

// 1. App컴포넌트 기본 틀
function App() {
  // 4. userReducer 선언
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  // 9. useRef,
  // 기준값은 4, 기존에 3개가 등록되어 있어서(?)
  const nextId = useRef(4);

  // 6. onChange event
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  // 8. onCreate evnet
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        // 10. current 추가
        id: nextId.currnet,
        username,
        email,
      },
    });
    // 11. dispatch 밑에 nextid, currrent +== 1;
    nextId.current += 1;
    // 8-1.useCallback을 사용하고 있고 상태에서 기존 상테에 의존 하는 것이 있으므로 deps를 넣어준다
  }, [username, email]);

  // 16. onToggle 함수
  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  // 17. onRemove 함수
  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  // 18. 활성 카운트
  const count = useMemo(() => {
    countActiveUsers(users);
  }, [users]);

  // 5. rops 전달
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
