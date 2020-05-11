/* eslint-disable react/prop-types */
import React from 'react';

const Child = ({ lotto }) => (
  <>
    <div>자식컴포넌트</div>
    <br />
    {lotto.map((number) => `${number} `)}
  </>
);

export default Child;
