import { render, screen, fireEvent } from '@testing-library/react';
import Quiz2 from '../../components/Quiz2';

test('button is gray when clicked', () => {
  render(<Quiz2 />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });
  const checkboxElement = screen.getByRole('checkbox', {
    name: 'Disable button',
  });

  // initial
  expect(buttonElement).toHaveStyle({ backgroundColor: 'red' });
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
  expect(buttonElement).toHaveStyle({ backgroundColor: 'red' });

  // click button while enabled
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});
