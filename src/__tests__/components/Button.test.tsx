import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

test('button has corrent initial color', () => {
  render(<Button />);

  const button = screen.getByRole('button', { name: /change to blue/i });

  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('button change color to blue after click', () => {
  render(<Button />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  // expect(buttonElement);
  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });

  expect(buttonElement).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<Button />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  expect(buttonElement).toBeEnabled();

  const checkBoxElement = screen.getByRole('checkbox');

  expect(checkBoxElement).not.toBeChecked();
});
