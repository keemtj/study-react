import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    // css가 없으면 template literal: 백틱안에 props 불가능
    // css가 있으면 Tagged template literal: 백틱안에 새로운 props를 넣을 수 있다
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return <Circle color="blue" huge />;
}

export default App;
