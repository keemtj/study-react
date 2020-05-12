import React from 'react';

const Header = ({ headerText, logout }) => {
  return (
    <header>
      {headerText}
      {logout}
    </header>
  );
};

export default Header;
