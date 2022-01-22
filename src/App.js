import { useState } from 'react';
import './App.css';
import { ColorBox } from './ColorBox';
import { ColorInput } from './ColorInput';

function App() {
  const [color, setColor] = useState('');
//   const [ boxColor, setBoxColor ] = useState('');

//   const setBoxColor = (color) => {
//     color.
//   } 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!color) return;
//     //set box color
//     setColor('');

// }

  return (
    <div className="App">
      <ColorBox
        color={color}
        setColor={setColor}
        />
      <ColorInput 
        color={color}
        setColor={setColor}
        // handleSubmit={handleSubmit} 
      />
    </div>
  );
}

export default App;
