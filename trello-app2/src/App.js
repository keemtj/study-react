import React, { useState } from 'react';
import LoginTemplate from './Components/LoginTemplate';
import BoardTemplate from './Components/BoardTemplate';

const App = () => {
  // state
  const [templatesActive, setTemplatesActive] = useState(false);

  // login전에는 headerText: '로그인요망' // login후에는 headerText: 'userId'
  // logout후에 유저id
  // const [headerState, setHeaderState] = useState({
  //   headerText: '로그인 요망',
  //   logout: '',
  // });

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

  const toggleActive = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
    setTemplatesActive(!templatesActive);
  };

  const userCheck = () => {
    const [userOk] = users.filter(
      (user) => user.id === userId && user.password === userPw,
    );
    if (!userOk) return alert('너 계정 틀림');
    toggleActive(userOk.id);
  };

  const toggleHeader = () => {
    // templatesActive ?
  };

  return (
    <>
      {templatesActive ? (
        <BoardTemplate toggleHeader={toggleHeader} users={users} />
      ) : (
        <LoginTemplate
          toggleHeader={toggleHeader}
          inputs={inputs}
          onChange={onChange}
          userCheck={userCheck}
        />
      )}
    </>
  );
};

export default App;
