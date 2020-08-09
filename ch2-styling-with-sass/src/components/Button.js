import React from 'react';
import classNames from 'classnames';

import './Button.scss';

// size: large, medium, small
// function Button({ children, size = 'medium' }) {
function Button({ children, size }) {
  return (
    <>
      <button className={classNames('Button', size)}>{children}</button>
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
Button.defaultProps = {
  size: 'medium',
};

export default Button;
