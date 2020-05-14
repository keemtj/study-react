import React from 'react';

const NewBoard = ({
  boardNames,
  onChange,
  onKeyPress,
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
        value={input}
      />
    </div>
  );
};

export default NewBoard;
