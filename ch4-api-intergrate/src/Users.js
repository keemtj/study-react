import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// type: LOADING, SUCCESS, ERROR
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    // 로딩이 시작할 때
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/',
      );
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
        <button onClick={fetchUsers}>다시 불러오기</button>
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
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
