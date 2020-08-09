import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size: large, medium, small
// color: blue, pink, gray
// outline, fullWidth: 객체 안에 props로 넣어주면 props = true일 때만 CSS클래스가 적용
// function Button({ children, size = 'medium' }) {
function Button({ children, size, color, outline, fullWidth }) {
  return (
    <>
      <button
        className={classNames('Button', size, color, { outline, fullWidth })}
      >
        {children}
      </button>
      {/* <button className={classNames('Button', size || 'medium')}>{children}</button> */}
      {/* <button className={['Button', size].join(' ')}>{children}</button> */}
      {/* <button className={`Button ${size}`}>{children}</button> */}
    </>
  );
}

// default값 설정 3가지 방법
// defaultProps를 써야 redux 개발자 도구에서도 볼 수가 있다

// function Button({ children, size = 'medium' }) {
// <button className={classNames('Button', size || 'medium')}>{children}</button>
// Button.defaultProps = { size: 'medium'};

// outline, fullWith의 경우 값이 없으면 undefined이고 classNames안에서 undefined는 처리하지 않기 때문에 defaultProps를 설정할 필요가 없다
Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
