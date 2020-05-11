import React from 'react';

const LoginForm = ({ inputs, onChange, userCheck }) => {
  console.log(inputs);
  return (
    <>
      <span>로그인</span>
      <form>
        <span>아이디</span>
        <input
          type="text"
          name="userId"
          onChange={onChange}
          value={inputs.userId}
        />
        <span>패스워드</span>
        <input
          type="password"
          name="userPw"
          onChange={onChange}
          value={inputs.userPw}
        />
        <button type="submit" onClick={userCheck}>
          로그인하기
        </button>
      </form>
    </>
  );
};

export default LoginForm;
