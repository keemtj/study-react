import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  // 상태(state) 설정
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // 컴포넌트의 상태로서 관리되어지고 있지 않아서 useState로 감싸서 상태로 관리
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4); // 리랜더링 되도 4라는 변수가 유지된다

  const onCreate = () => {
    const user = {
      id: nextId.current,
      ...inputs,
    };

    // 배열에 항목 추가하기
    setUsers([...users, user]);
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    // += 1바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다는 것이 중요
    console.log(nextId.current); // 4
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
