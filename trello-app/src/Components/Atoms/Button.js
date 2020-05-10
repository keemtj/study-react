import React from 'react';

// 1. Login-button
// 2. Header-Logout-button
// 3. Board-Delete-button

function Button({ type, value, onToggle }) {
  return (
    <button type={type} onClick={() => onToggle}>
      {value}
    </button>
  );
}

export default Button;
