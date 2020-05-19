import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EachSkill from '../Page/EachSkill';

const SubRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/Skill"
        render={() => {
          return <h3>공부한 스킬을 선택해주세요</h3>;
        }}
      />
      <Route path="/Skill/:content_id" component={EachSkill} />
    </Switch>
  );
};

export default SubRouter;
