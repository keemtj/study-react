import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

// f getUsers: 데이터를 불러오는 함수 = api를 불러오는 함수
async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/',
  );
  return response.data;
}

function Users() {
  // custom hook, useAsync(callback, deps =[])
  const [state, refetch] = useAsync(getUsers, []);
  /*
    Web(chrome) inspector -> network tab
    -> Trotting: Online(default)을 Fast 3G, Slow 3G로 설정
    -> loading, error일 때의 return값 확인 가능
  */
  const { loading, data: users, error } = state;
  if (loading) return <div>로딩중 ... </div>;
  if (error)
    return (
      <>
        <div>에러가 발생했습니다</div>
        <button onClick={refetch}>다시 불러오기</button>
      </>
    );
  if (!users) return null; // return null; =>  아무것도 안보여지게 됨

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      {/* 데이터 다시 불러오기 버튼 */}
      <button onClick={refetch}>다시 불러오기</button>
    </>
  );
}

export default Users;
