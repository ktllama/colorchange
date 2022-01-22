import { useState } from 'react';
import './App.css';
import { ColorBox } from './ColorBox';
import { ColorInput } from './ColorInput';

function App() {
  const [color, setColor] = useState('no color')

  const handleSubmit = (e) => {
    console.log(e);
}

  return (
    <div className="App">
      <ColorBox />
      <ColorInput 
        color={color}
        setColor={setColor}
        handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
