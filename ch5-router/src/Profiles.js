import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

function Profiles() {
  // 변수를 바로 Route 렌더에서 사용 가능
  const test = 'asdf';
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/keemtj">keemtj</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요{test}</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
