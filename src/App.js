import { useState } from 'react';
import './App.css';
import { ColorBox } from './ColorBox';
import { ColorInput } from './ColorInput';

function App() {
  const [color, setColor] = useState('');
//   const [ boxColor, setBoxColor ] = useState('');

//   const setBoxColorAgain = (color) => {
//     setBoxColor(color);
//     console.log (boxColor);
//   } 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!color) return;
//     setBoxColorAgain(color)
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
      />
    </div>
  );
}

export default App;
