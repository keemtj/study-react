import React from 'react';

const Header = ({ headerState, onClickLogout }) => {
  return (
    <header>
      <span>{headerState.headerText}</span>
      &nbsp;
      <span onClick={onClickLogout}>
        {headerState.logout}
      </span>
    </header>
  );
};

export default Header;
