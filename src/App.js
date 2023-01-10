import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [wrongColorOne, setWrongColorOne] = useState('');
  const [wrongColorTwo, setWrongColorTwo] = useState('');

  useEffect(() => {
    getRandomColor();
    changeBackground()
  }, []);

  function getRandomColor() {
    let colorOne;
    let colorTwo;
    let colorThree;
    let colorFour;
    let colorFive;
    let colorSix;

    const choices = 'ABCDEF0123456789';

    const rand1 = Math.ceil(Math.random() * (18 - 0) + 0);
    const rand2 = Math.ceil(Math.random() * (18 - 0) + 0);
    const rand3 = Math.ceil(Math.random() * (18 - 0) + 0);
    const rand4 = Math.ceil(Math.random() * (18 - 0) + 0);
    const rand5 = Math.ceil(Math.random() * (18 - 0) + 0);
    const rand6 = Math.ceil(Math.random() * (18 - 0) + 0);

    colorOne = choices.charAt(rand1);
    colorTwo = choices.charAt(rand2);
    colorThree = choices.charAt(rand3);
    colorFour = choices.charAt(rand4);
    colorFive = choices.charAt(rand5);
    colorSix = choices.charAt(rand6);

    let newColor = [colorOne, colorTwo, colorThree, colorFour, colorFive, colorSix].join('');

    if (newColor.length === 6) {
      setColor(newColor);
    } else {
      getRandomColor();
    }
  };

  function changeBackground() {
    const square = document.getElementById('square');
    console.log(color);
    square.style.backgroundColor = `#${color}`;
  };


  return (
    <div className="container">
      <div className='square' id='square'/>
      <h1 className='title'>Guess the Color!</h1>
      <div className='row'>
        <button className='button'>dsf</button>
        <button className='button'>{`#${color}`}</button>
        <button className='button'>dfgdg</button>
      </div>
      <button onClick={getRandomColor}>TEST</button>
      <button onClick={changeBackground}>TEST CHANGE</button>
    </div>
  );
}

export default App;
