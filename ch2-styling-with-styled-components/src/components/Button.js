import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* common style */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* size */
  height: 2.25rem;
  font-size: 1rem;

  /* color */
  background: #228be6;
  &:hover {
    background: #330af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /* 버튼끼리 같이 있을 때 주기 위한 여백 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
