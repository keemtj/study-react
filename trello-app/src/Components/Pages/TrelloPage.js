import React from 'react';
import LoginTemplate from '../Templates/LoginTemplate';
import BoardTemplate from '../Templates/BoardTemplate';

function TrelloPage() {
  // 앱을 실행하면 전체 user의 온/오프 상태 체크(onlineCheck함수) =>
  // users.online이 모두 false면 loginTemplate의 isSpecial=true and BoardTemplate의 isSpecial=false

  return (
    <>
      <LoginTemplate isSpecial />
      <BoardTemplate isSpecial={false} />
    </>
  );
}

export default TrelloPage;
