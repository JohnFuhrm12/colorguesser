import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('aqua');


  return (
    <div className="container">
      <div className='square' style={{backgroundColor: color}}/>
      <h1 className='title'>Guess the Color</h1>
      <div className='row'>
        <button className='button'>#FF87A3</button>
        <button className='button'>#FF87A3</button>
        <button className='button'>#FF87A3</button>
      </div>
    </div>
  );
}

export default App;
