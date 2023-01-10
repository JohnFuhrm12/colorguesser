import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('aqua');


  return (
    <div className="container">
      <div className='square' style={{backgroundColor: color}}/>
      <h1 className='title'>Guess the Color</h1>
    </div>
  );
}

export default App;
