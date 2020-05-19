import React, { useEffect } from 'react';

const HistoryTab = ({ history }) => {
  const goBack = () => history.goBack();

  const goHome = () => history.push('/');
  // ['/', '/About', 'Skill', ...] 경로가 스택으로 쌓임
  useEffect(() => {
    const unblock = history.block('페이지를 정말로 나가시겠습니까?');
    return () => {
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로가기</button>
    </div>
  );
};

export default HistoryTab;
