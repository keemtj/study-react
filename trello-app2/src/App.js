import React, { useState } from 'react';
import LoginTemplate from './Components/LoginTemplate';
import BoardTemplate from './Components/BoardTemplate';

const App = () => {
  // state
  const [templatesActive, setTemplatesActive] = useState(
    false,
  );

  const [headerState, setHeaderState] = useState({
    headerText: '로그인 필요',
    logout: '',
  });

  const [users, setUsers] = useState([
    {
      _id: 1,
      id: '스티브 잡스',
      password: '1234',
      active: false,
    },
    {
      _id: 2,
      id: '마크 주커버그',
      password: '12345',
      active: false,
    },
  ]);

  const [inputs, setInputs] = useState({
    userId: '',
    userPw: '',
  });

  const { userId, userPw } = inputs;

  // input이 여러개 일 때 target에 맞게 프로퍼티 동적 추가
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onResetInput = () => {
    setInputs({
      userId: '',
      userPw: '',
    });
  };

  const toggleHeader = (id) => {
    setHeaderState({
      ...headerState,
      headerText: `${id}`,
      logout: '로그아웃',
    });
  };

  const toggleActive = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, active: !user.active }
          : user,
      ),
    );
    setTemplatesActive(!templatesActive);
    toggleHeader(id);
    onResetInput();
    console.log(
      '%c%s',
      'color: green;',
      '[Login버튼 실행 직전 유저의 active정보] => ',
      users,
    );
  };

  const userCheck = (e) => {
    // input에서 event 발생 시 reload를 방지함
    e.preventDefault();
    const [userOk] = users.filter(
      (user) =>
        user.id === userId && user.password === userPw,
    );
    if (!userOk) return alert('너 계정 틀림');
    toggleActive(userOk.id);
  };

  const onClickLogout = ({ target }) => {
    setTemplatesActive(!templatesActive);
    setUsers(
      users.map((user) =>
        user.id ===
        target.previousElementSibling.textContent
          ? { ...user, active: !user.active }
          : user,
      ),
    );
    setHeaderState({
      ...headerState,
      headerText: '로그인 요망',
      logout: '',
    });
    console.log(
      '%c%s',
      'color: green;',
      '[Logout버튼 실행 직전 당시에 유저의 active정보] => ',
      users,
    );
  };

  return (
    <>
      {templatesActive ? (
        <BoardTemplate
          headerState={headerState}
          users={users}
          onClickLogout={onClickLogout}
        />
      ) : (
        <LoginTemplate
          headerState={headerState}
          inputs={inputs}
          onChange={onChange}
          userCheck={userCheck}
        />
      )}
    </>
  );
};

export default App;
