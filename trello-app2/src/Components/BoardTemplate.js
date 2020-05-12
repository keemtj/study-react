import React from 'react';
import Header from './Header';
import Board from './Board';

const BoardTemplate = ({
  headerState,
  onClickLogout,
  users,
}) => {
  return (
    <>
      <Header
        headerState={headerState}
        onClickLogout={onClickLogout}
      />
      <Board users={users} />
    </>
  );
};

export default BoardTemplate;
