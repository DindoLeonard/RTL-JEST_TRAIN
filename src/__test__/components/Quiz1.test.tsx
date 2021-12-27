import { fireEvent, render, screen } from '@testing-library/react';
import Quiz1 from '../../components/Quiz1';

test('Initial conditions', () => {
  render(<Quiz1 />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  expect(buttonElement).toBeEnabled();

  expect(buttonElement).toHaveStyle({ backgroundColor: 'red' });

  const checkboxElement = screen.getByRole('checkbox');

  expect(checkboxElement).not.toBeChecked();
});

test('button change background color when clicked', () => {
  render(<Quiz1 />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  expect(buttonElement).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });

  expect(buttonElement.textContent).toBe('Change to red');
});

test('button id disabled when checkbox is checked', () => {
  render(<Quiz1 />);

  const checkboxElement = screen.getByRole('checkbox');
  const buttonElement = screen.getByRole('button', {
    name: /change to blue/i,
  });

  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement, { name: 'Disable button' });
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
});
