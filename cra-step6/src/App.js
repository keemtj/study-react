import React from 'react';
import { NavLink } from 'react-router-dom';
import MainRouter from './Router/MainRouter';
import Header from './Page/Header';

function App() {
  const activeStyle = {
    background: '#000',
    color: '#fff',
  };

  return (
    <div>
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
