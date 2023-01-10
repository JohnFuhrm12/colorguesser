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

    let falseColor = [colorThree, colorFive, colorOne, colorFour, colorTwo, colorSix].join('');

    if (newColor.length === 6) {
      setColor(newColor);
      return newColor;
    } else {
      getRandomColor();
      return falseColor;
    };
  };

  function changeBackground() {
    const square = document.getElementById('square');
    square.style.backgroundColor = `#${color}`;
  };

  function handleClick(guess) {
    if (!correctMessage && guess === `#${color}`) {
      setCorrectMessage(true);
      setErrorMessage(false);
    } else if (!errorMessage && guess !== `#${color}`) {
      setErrorMessage(true);
      setCorrectMessage(false);
    };
    getNewColors();
  };

  function getNewColors() {
    getRandomColor();
    changeBackground();
    setWrongColorOne(getRandomColor());
    setWrongColorTwo(getRandomColor());
    shuffleArray(responses);
  };

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

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
