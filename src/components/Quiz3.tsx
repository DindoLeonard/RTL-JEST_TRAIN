import React, { useState } from 'react';
import replaceCamelWithSpaces from '../functions/replaceCamelWithSpaces';

const Quiz3 = (): React.ReactElement => {
  const [buttonColor, setButtonColor] = useState<string>('MediumVioletRed');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const handleButtonClick = () => {
    setButtonColor(
      buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'
    );
  };

  const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonDisabled(e.target.checked);
  };

  return (
    <>
      <button
        type="button"
        style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor }}
        disabled={buttonDisabled}
        onClick={handleButtonClick}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onChange={onCheckBoxChange}
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
      />
    </>
  );
};

export default Quiz3;
