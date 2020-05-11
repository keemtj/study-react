import React from 'react';
import Header from '../Molecules/Header';
import BoardMain from '../Organisms/BoardMain';

function BoardTemplate(props) {
  console.log('[BoardTemplate] =>', props);
  return (
    <>
      <Header />
      <BoardMain />
    </>
  );
}

export default BoardTemplate;
