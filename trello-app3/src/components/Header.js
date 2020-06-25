import React from 'react';
import { MdDehaze } from 'react-icons/md';
import './Header.scss';

const Header = ({ loginState, onClickLogout }) => {
  return (
    <header className="header">
      <MdDehaze className="icon" />
      <h1 className="app-name">Trello</h1>
      <div className="user-id">{loginState && `Hi! TestID`}</div>
      <button onClick={onClickLogout} className="login-state">
        {loginState ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Header;
