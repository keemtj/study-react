import React from 'react';
import { MdEventAvailable } from 'react-icons/md';
import './Header.scss';

const Header = ({ users, loginState, onClickLogout }) => {
  return (
    <header className="header">
      <MdEventAvailable className="icon" />
      <h1 className="app-name">Trello</h1>
      <div className="user-id">{loginState && `Hi! ${users.userId}`}</div>
      <button onClick={onClickLogout} className="login-state">
        {loginState ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Header;
