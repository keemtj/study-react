import React, { useState } from 'react';
import Info from './Info';
// import Counter from './Counter';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기버튼' : '보이기버튼'}
      </button>
      {visible && <Info />}
    </div>
  );
};

export default App;
