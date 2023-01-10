import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [wrongColorOne, setWrongColorOne] = useState('');
  const [wrongColorTwo, setWrongColorTwo] = useState('');

  const [correctMessage, setCorrectMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  let responses = [`#${wrongColorOne}`, `#${color}`, `#${wrongColorTwo}`];

  useEffect(() => {
    getNewColors()
  }, []);

  function getRandomColor(decider) {
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

    if (decider === 'correct') {
      if (newColor.length === 6) {
        setColor(newColor);
        return newColor;
      } else {
        getRandomColor('correct');
      };
    };

    if (decider === 'wrongOne') {
      if (newColor.length === 6) {
        setWrongColorOne(newColor);
        return newColor;
      } else {
        getRandomColor('wrongOne');
      };
    };

    if (decider === 'wrongTwo') {
      if (newColor.length === 6) {
        setWrongColorTwo(newColor);
        return newColor;
      } else {
        getRandomColor('wrongTwo');
      };
    };
  };

  function changeBackground() {
    const square = document.getElementById('square');
    square.style.backgroundColor = `#${color}`;
  };

  function handleClick(guess) {
    if (guess === `#${color}`) {
      setCorrectMessage(true);
      setErrorMessage(false);
    } else if (guess !== `#${color}`) {
      setErrorMessage(true);
      setCorrectMessage(false);
    };
    getNewColors();
  };

  function getNewColors() {
    getRandomColor('correct');
    changeBackground();
    getRandomColor('wrongOne');
    getRandomColor('wrongTwo');
  };

  // Shuffle Responses
  responses.sort( () => 0.5 - Math.random() );

  return (
    <div className="container">
      <div className='square' id='square'/>
      <h1 className='title'>Guess the Color!</h1>
      <div className='row'>
        {responses.map((response) => 
          <>
          <button onClick={(e) => handleClick(e.currentTarget.innerHTML)} className='button'>{response}</button>
          </>
        )}
      </div>
      {correctMessage ? <h2 className='correctMessage'>Correct!</h2> : <></>}
      {errorMessage ? <h2 className='errorMessage'>Incorrect!</h2> : <></>}
    </div>
  );
}

export default App;
