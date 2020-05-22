import React, { useState, useRef } from 'react';

const LoginSample = ({ loginState, setLoginState }) => {
  // const [users, setUsers] = useState([
  //   { userId: 'test1', userPassword: '1234', online: false },
  //   { userId: 'test2', userPassword: '1234', online: false },
  //   { userId: 'test3', userPassword: '1234', online: false },
  // ]);
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });
  const { id, password } = inputs;
  const inputEl = useRef(null);

  const onChange = ({ target }) => {
    console.log(`사용자 ${target.placeholder} 입력중`);
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  const onSubmit = (e) => {
    console.log('로그인 시도');
    e.preventDefault();
    onReset();
    inputEl.current.focus();
    setLoginState(!loginState);
  };

  const onReset = () => {
    setInputs({
      ...inputs,
      id: '',
      password: '',
    });
  };

  return (
    <div>
      <div>로그인</div>
      <form onSubmit={onSubmit}>
        <div>ID:</div>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={id}
          onChange={onChange}
          ref={inputEl}
        />
        <div>PASS:</div>
        <input
          type="password"
          name="password"
          placeholder="패스워드"
          value={password}
          onChange={onChange}
        />
        <div>
          <button type="submit">로그인하기</button>
        </div>
      </form>
    </div>
  );
};

export default LoginSample;
