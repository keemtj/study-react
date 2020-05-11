import React, { useState } from 'react';
import TrelloPage from './Components/Pages/TrelloPage';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      userId: 'test1',
      userPw: '1234',
      online: false,
    },
    {
      id: 2,
      userId: 'test2',
      userPw: '1234',
      online: false,
    },
  ]);
  console.log(setUsers);
  return <TrelloPage users={users} />;
}

export default App;
// trello app이 시작하면 logintemplate먼저 보여준다 => user의 online: false
