import React, { useState } from 'react';

const Button = (): React.ReactElement => {
  const [buttonColor, setButtonColor] = useState<string>('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const onButtonColorChangeClick = () => {
    setButtonColor(newButtonColor);
  };
  return (
    <>
      <button
        type="button"
        style={{ backgroundColor: buttonColor }}
        onClick={onButtonColorChangeClick}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </>
  );
};

export default Button;
