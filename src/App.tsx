import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Quiz1 from './components/Quiz1';
import Quiz3 from './components/Quiz3';
// import Assertion from './example-code/Assertions';

function App(): React.ReactElement {
  return (
    <div
      data-testid="app-wrapper"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Button />
      <Quiz1 />
      <Quiz3 />
    </div>
  );
}

export default App;
