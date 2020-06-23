import React from 'react';
import { MdDehaze } from 'react-icons/md';
import './Header.scss';

const Header = ({ loginState }) => {
  return (
    <header className="header">
      <MdDehaze className="icon" />
      <h1 className="app-name">Trello</h1>
      <div className="login-state">{loginState ? 'Logout' : 'Login'}</div>
    </header>
  );
};

export default Header;
