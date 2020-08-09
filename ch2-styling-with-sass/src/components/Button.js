import React, { Children } from 'react';
import './Button.scss';

// size: large, medium, small
function Button({ children, size }) {
  return (
    <div>
      <button className={['Button', size].join(' ')}>{children}</button>
      <button className={`Button ${size}`}>{children}</button>
    </div>
  );
}

export default Button;
