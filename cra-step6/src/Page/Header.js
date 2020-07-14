import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    background: '#000',
    color: '#fff',
  };
  return (
    <div>
      <h1>DAY ONE</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            메인
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeStyle={activeStyle}>
            자기소개
          </NavLink>
        </li>
        <li>
          <NavLink to="/Skill" activeStyle={activeStyle}>
            보유스킬
          </NavLink>
        </li>
        <li>
          <NavLink to="/HistoryTab" activeStyle={activeStyle}>
            히스토리 보기
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
