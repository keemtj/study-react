import React from 'react';
import Span from '../Atoms/Span';
import Button from '../Atoms/Button';

function Header() {
  // span, button
  return (
    <header>
      <Span value="로그인 요망" />
      <Button value="로그아웃" />
    </header>
  );
}

export default Header;
