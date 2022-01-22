import { useState } from 'react';
import './App.css';
import { ColorBox } from './ColorBox';
import { ColorInput } from './ColorInput';

function App() {
  const [color, setColor] = useState('');

  return (
    <div className="App">
      <ColorBox
        color={color}
        setColor={setColor}
        />
      <ColorInput 
        color={color}
        setColor={setColor} 
      />
    </div>
  );
}

export default App;
