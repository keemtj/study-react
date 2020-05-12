import React, { useState } from 'react';
import LoginTemplate from './Components/LoginTemplate';
import BoardTemplate from './Components/BoardTemplate';

const App = () => {
  // state
  const [templatesActive, setTemplatesActive] = useState(
    false,
  );

  const [headerState, setHeaderState] = useState({
    headerText: '로그인 요망',
    logout: '',
  });

  const [users, setUsers] = useState([
    {
      _id: 1,
      id: 'test',
      password: '1234',
      active: false,
    },
    {
      _id: 2,
      id: 'test2',
      password: '12345',
      active: false,
    },
  ]);

  const [inputs, setInputs] = useState({
    userId: '',
    userPw: '',
  });

  const { userId, userPw } = inputs;

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
  };

  const userCheck = () => {
    const [userOk] = users.filter(
      (user) =>
        user.id === userId && user.password === userPw,
    );
    if (!userOk) return alert('너 계정 틀림');
    toggleActive(userOk.id);
  };

  const onClickLogout = ({ target }) => {
    setUsers(
      users.map((user) =>
        user.id ===
        target.previousElementSibling.textContent
          ? { ...user, active: !user.active }
          : user,
      ),
    );
    setTemplatesActive(!templatesActive);
    setHeaderState({
      ...headerState,
      headerText: '로그인 요망',
      logout: '',
    });
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
