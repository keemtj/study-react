import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/About">소개</Link>
        </li>
        <li>
          <Link to="/Profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/Profile/keem">keem 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path={['/About', '/info']} component={About} />
      <Route path="/Profile/:username" component={Profile} />
    </div>
  );
};

export default App;
