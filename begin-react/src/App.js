import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'jay jay jay',
      email: 'keemgreat@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];
  // 리랜더링 되도 4라는 변수가 유지된다
  const nextId = useRef(4);

  const onCreate = () => {
    // += 1바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다는 것이 중요
    console.log(nextId.current); // 4
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
