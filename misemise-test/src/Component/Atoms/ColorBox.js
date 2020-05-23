// import React from 'react';
// import { ColorConsumer } from '../../Context/color';

// const ColorBox = () => {
//   return (
//     // colorcontext의 state
//     <ColorConsumer>
//       {({ state }) => (
//         <>
//           <div
//             style={{
//               width: '64px',
//               height: '64px',
//               background: state.color,
//             }}
//           />
//           <div
//             style={{
//               width: '32px',
//               height: '32px',
//               background: state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

// export default ColorBox;

import React, { useContext } from 'react';
import ColorContext from '../../Context/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div style={{ width: '64px', height: '64px', background: state.color }} />
      <div
        style={{ width: '32px', height: '32px', background: state.subcolor }}
      />
    </>
  );
};

export default ColorBox;
