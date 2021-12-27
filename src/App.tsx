import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Assertion from './example-code/Assertions';

function App() {
  const [buttonColor, setButtonColor] = useState<string>('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const onButtonColorChangeClick = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: buttonColor }}
        onClick={onButtonColorChangeClick}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
