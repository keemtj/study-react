import React from 'react';

const NewBoard = ({
  boardNames,
  onChange,
  onKeyPress,
  inputRef,
  input,
}) => {
  console.log('[boardNames]-> ', boardNames);
  console.log('[input]-> ', input);
  return (
    <div>
      <span>New Board</span>
      &nbsp;&nbsp;
      <input
        type="text"
        name="newBoardInput"
        onChange={onChange}
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
    </div>
  );
};

export default NewBoard;
