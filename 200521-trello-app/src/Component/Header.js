import React from 'react';

const Header = ({ loginState, onClickLogout }) => {
  return (
    <div onClick={onClickLogout}>{loginState ? '로그아웃' : '로그인'}</div>
  );
};

export default Header;
