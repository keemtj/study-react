import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

// useCallback으로 감싸준 함수에서 상위 컴포넌트의 props로써 받은 함수(onDoSomething)를 쓸 경우 deps에 넣어주어야 한다
function App() {
  // 상태(state) 설정
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );

  // 컴포넌트의 상태로서 관리되어지고 있지 않아서 useState로 감싸서 상태로 관리
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'jay jay jay',
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
  ]);

  const nextId = useRef(4); // 리랜더링 되도 4라는 변수가 유지된다

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      ...inputs,
      // username,
      // email,
    };

    // 배열에 항목 추가하기
    setUsers((users) => [...users, user]);
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    // += 1바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다는 것이 중요
    // console.log(nextId.current); // 4
    nextId.current += 1;
  }, [inputs]); // [username, email, users]

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
