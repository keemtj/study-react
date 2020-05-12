import React from 'react';

const Header = ({ headerState, onClickLogout }) => {
  return (
    <header>
      <span>{headerState.headerText} </span>
      <span onClick={onClickLogout}>
        {headerState.logout}
      </span>
    </header>
  );
};

export default Header;
