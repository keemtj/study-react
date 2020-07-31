import React, { useEffect } from 'react';

function HistorySample({ history }) {
  const goBack = () => {
    // 뒤로 가기
    history.goBack();
  };

  const goHome = () => {
    // 특정 경로로 이동
    history.push('/');
  };

  const replaceToHome = () => {
    history.replace('/');
  };

  // 컴포넌트가 처음 렌더링 됐을 때 history 객체에 무엇이 있는지 확인
  useEffect(() => {
    console.log(history);

    // 무언가를 작성하고 있다가 실수로 페이지를 이탈할 수도 있는 경우에 주로 사용
    const unblock = history.block('정말 떠나실건가요?');

    return () => {
      // 컴포넌트가 unmount될 때 실행
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (replace)</button>
    </div>
  );
}

export default HistorySample;
