import React, { useState, useRef } from 'react';

const LoginSample = () => {
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
      <h1>로그인</h1>
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
