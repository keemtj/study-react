import React from 'react';

// 1. ID-input
// 2. PASSWORD-input
// 3. NewBoard-input
// 4. Board-Content-input

function Input({ name, placeholder, type }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default Input;
