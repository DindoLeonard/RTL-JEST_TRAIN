import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Quiz1 from './components/Quiz1';
import Quiz3 from './components/Quiz3';
import SummaryForm from './pages/summary/SummaryForm';
// import Assertion from './example-code/Assertions';

function App(): React.ReactElement {
  const [active, _setIsActive] = useState<boolean>(true);

  return (
    <div
      data-testid="app-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {active ? (
        <SummaryForm />
      ) : (
        <div>
          <Button />
          <Quiz1 />
          <Quiz3 />
        </div>
      )}
    </div>
  );
}

export default App;
