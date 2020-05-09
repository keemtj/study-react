import React from 'react';

// UserList의 child 컴포넌트
function User({ user }) {
  console.log('[UserList컴포넌트에서 가져온 props]', user);
  return (
    <div>
      <b>{user.username} </b>
      <span>({user.email})</span>
    </div>
  );
}

export default User;
