import React from 'react';
import { Link } from 'react-router-dom';
import SubRouter from '../Router/SubRouter';

const Skill = () => {
  let contents = [
    { id: 1, title: 'HTML', description: 'HTML is ...' },
    { id: 2, title: 'JS', description: 'JS is ...' },
    { id: 3, title: 'React', description: 'React is ...' },
  ];

  let skillList = [];

  for (var i = 0; i < contents.length; i++) {
    skillList.push(
      <li key={contents[i].id}>
        <Link to={'/Skill/' + contents[i].id}>{contents[i].title}</Link>
      </li>,
    );
  }

  return (
    <>
      <ul>
        <li>
          <Link to={'/Skill/1'}>버튼1</Link>
        </li>
        <li>
          <Link to={'/Skill/2'}>버튼2</Link>
        </li>
        <li>
          <Link to={'/Skill/3'}>버튼3</Link>
        </li>
      </ul>
      <SubRouter contents={contents} />
    </>
  );
};

export default Skill;
