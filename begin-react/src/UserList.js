import React from 'react';
import User from './User';

// User의 parent 컴포넌트
function UserList() {
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

  return (
    <div>
      {/* 고차함수 콜백함수의 첫번째 인수인 item이 props...? */}
      {/* 각 child = user를 가리키는 데 unique key라는 prop을 필요로 한다. 여기서는 id가 고유의 값  */}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      {/* id(=unique key)가 없으면 index를 넣어주어도 되는데, 웬만해서는 key대신 index 넣는것은 피해주는 것이 좋다 */}
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
}

export default UserList;
