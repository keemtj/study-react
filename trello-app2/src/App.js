import React, { useState } from 'react';
import LoginTemplate from './Components/LoginTemplate';
import BoardTemplate from './Components/BoardTemplate';

function App() {
  // state
  const [templatesActive, setTemplatesActive] = useState(
    false,
  );
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
        user.id === id
          ? { ...user, active: !user.active }
          : user,
      ),
    );
    setTemplatesActive(!templatesActive);
  };

  const userCheck = () => {
    users.map(
      (user) =>
        user.id === userId &&
        user.password === userPw &&
        toggleActive(user.id),
    );
  };

  return (
    <>
      {templatesActive ? (
        <BoardTemplate users={users} />
      ) : (
        <LoginTemplate
          inputs={inputs}
          onChange={onChange}
          userCheck={userCheck}
        />
      )}
    </>
  );
}

export default App;
