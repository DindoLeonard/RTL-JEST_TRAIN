import { render, screen, fireEvent } from '@testing-library/react';
import Quiz3 from '../../components/Quiz3';

test('button is gray when clicked', () => {
  render(<Quiz3 />);

  const buttonElement = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });

  const checkboxElement = screen.getByRole('checkbox', {
    name: 'Disable button',
  });

  // initial
  expect(buttonElement).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
  expect(checkboxElement).not.toBeChecked();

  // checkbox-clicked
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveStyle({ backgroundColor: 'gray' });

  // click button while disabled
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: 'gray' });

  // re-click checkbox
  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button while enabled
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});
