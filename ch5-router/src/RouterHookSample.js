// import React from 'react'; // return null; 일 경우 = 렌더링 할 것이 없다면 불러올 필요 없음
import userReactRouter from 'use-react-router';

function RouterHookSample(props) {
  const { history, location, match } = userReactRouter();
  console.log(history);
  console.log(location);
  console.log(match);

  return null;
}

export default RouterHookSample;
