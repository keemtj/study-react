import React, { useState, useEffect } from 'react';
import axios from 'axiox';

function Users() {
  /*
    - useState와 useEffect로 데이터 로딩하기
    - 3가지 상태 관리
      1. 요청의 결과
      2. 로딩 상태
      3. 에러
   */
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false); // api가 요청중인지 아닌지 상태를 나타낸다
  const [error, setError] = useState(null);

  // 컴포넌트가 처음 렌더링 될 때 어떤 작업을 하겠다
  // useEffect(() => {}, []);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 초기화 작업
        setUsers(null);
        setError(null);

        // 데이터를 가져오는 동안 loading = true
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder/typicode.com/users',
        );

        // 가져온 데이터를 setUsers를 통해 업데이트
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      // 데이터를 가져오고 새롭게 users를 업데이트 해주면 loading = false
      setLoading(false);
    };
    // fetchUsers 호출
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중 ... </div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null; // return null; =>  아무것도 안보여지게 됨

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;
