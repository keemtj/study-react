import React from 'react';
import Header from './Header';
import Board from './Board';

const BoardTemplate = ({ users }) => {
  return (
    <>
      <Header />
      <Board users={users} />
    </>
  );
};

export default BoardTemplate;
