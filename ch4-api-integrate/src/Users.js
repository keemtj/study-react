import React, { useState } from 'react';
import axios from 'axios';
// import useAsync from './useAsync';
import { useAsync } from 'react-async';
import User from './User';

// f getUsers: 데이터를 불러오는 함수 = api를 불러오는 함수
async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/',
  );
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const { data: users, error, isLoading, reload, run } = useAsync({
    // promiseFn: getUsers, // 데이터를 바로 불러옴
    deferFn: getUsers, // 원할 때 데이터를 불러옴
  });
  /*
    Web(chrome) inspector -> network tab
    -> Trotting: Online(default)을 Fast 3G, Slow 3G로 설정
    -> loading, error일 때의 return값 확인 가능
  */
  if (isLoading) return <div>로딩중 ... </div>;
  if (error)
    return (
      <>
        <div>에러가 발생했습니다</div>
        <button onClick={reload}>다시 불러오기</button>
      </>
    );
  // data:users가 없는 상황에서 return null; ->  아무것도 안보여지도록 처리
  // if (!users) return null;
  if (!users) return <button onClick={run}>데이터 불러오기</button>; // null -> button 클릭으로 데이터를 불러오도록 설정

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      {/* 데이터 다시 불러오기 버튼 */}
      <button onClick={reload}>다시 불러오기</button>
      {/* <li>에서 onClick 이벤트가 발생하면 User 컴포넌트를 보여줌 */}
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
