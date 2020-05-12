import React from 'react';

const Header = ({ headerState, onClickLogout }) => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#111',
    height: '7vh',
    padding: '0.4rem',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    fontFamily: 'none',
    color: 'hsl(210, 10%, 62%)',
  };

  const cursorStyle = {
    border: '1px solid grey',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <span>{headerState.headerText}</span>
      &nbsp;
      <span style={cursorStyle} onClick={onClickLogout}>
        {headerState.logout}
      </span>
      &nbsp;&nbsp;
    </header>
  );
};

export default Header;
