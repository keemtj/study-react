import React from 'react';
import Span from '../Atoms/Span';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';

// 1. Login-Form
function LoginForm() {
  // input, span, button
  return (
    <div>
      <Span value="로그인" />
      <form>
        <Span value="아이디" />
        <Input
          type="text"
          name="id"
          placeholder="ID를 입력하세요"
        />
        <Span value="패스워드" />
        <Input
          type="password"
          name="password"
          placeholder="PW를 입력하세요"
        />
        <Button value="로그인하기" />
      </form>
    </div>
  );
}

export default LoginForm;
