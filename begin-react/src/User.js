import React from 'react';

// UserList의 child 컴포넌트
function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* 아래와 같이 해주면 렌더링 될때 바로 실행이 되버린다 */}
      {/* <button onClick={onRemove(id)}>삭제</button> */}
    </div>
  );
}

export default React.memo(User);
