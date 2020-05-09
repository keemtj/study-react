import React from 'react';

// UserList의 child 컴포넌트
function User(props) {
  console.log('[UserList컴포넌트에서 가져온 props]', props);
  return (
    <div>
      <b>{props.user.username} </b>
      <span>({props.user.email})</span>
    </div>
  );
}

export default User;
