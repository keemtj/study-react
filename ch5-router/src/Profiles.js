import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import RouterHookSample from './RouterHookSample';

function Profiles() {
  // 변수를 바로 Route 렌더에서 사용 가능
  const test = 'asdf';
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            // to='/' 일 경우 마찬가지로 exact가 필요
            to="/profiles/keemtj"
            activeStyle={{ background: 'black', color: 'white' }}
            activeClassName="active"
            // isActive={(match, location) => {
            //   return match.params.blah = 'blah
            // }}
          >
            keemtj
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            homer
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요{test}</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
}

export default Profiles;
