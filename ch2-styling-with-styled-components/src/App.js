import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${(props) => props.color};
//   border-radius: 50%;
//   ${(props) =>
//     props.huge &&
//     // css가 없으면 template literal: 백틱안에 props 불가능
//     // css가 있으면 Tagged template literal: 백틱안에 새로운 props를 넣을 수 있다
//     css`
//       width: 10rem;
//       height: 10rem;
//     `}
// `;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <AppBlock>
      <Button>BUTTON</Button>
    </AppBlock>
  );
}

export default App;
