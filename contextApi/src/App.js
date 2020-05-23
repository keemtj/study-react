import React from 'react';
import './App.css';
import ColorBox from './Component/Atoms/ColorBox';
import { ColorProvider } from './Context/color';
import SelectColor from './Component/Atoms/SelectColor';
import Mise from './Pages/Mise';

function App() {
  return (
    <div>
      <ColorProvider>
        <div>
          <SelectColor />
          <ColorBox />
        </div>
      </ColorProvider>
      <Mise />
    </div>
  );
}

export default App;
