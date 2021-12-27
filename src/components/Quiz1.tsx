import React, { useState } from 'react';

const Quiz1 = (): React.ReactElement => {
  const [buttonColor, setButtonColor] = useState<string>('red');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleButtonClick = () => {
    setButtonColor(buttonColor === 'red' ? 'blue' : 'red');
  };

  const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonDisabled(e.target.checked);
  };

  return (
    <>
      <button
        type="button"
        style={{ backgroundColor: buttonColor }}
        disabled={buttonDisabled}
        onClick={handleButtonClick}
      >
        Change to {newButtonColor}
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

export default Quiz1;
