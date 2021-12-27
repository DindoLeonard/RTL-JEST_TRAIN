import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has corrent initial color', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to blue/i });

  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('button change color to blue after click', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  // expect(buttonElement);
  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });

  expect(buttonElement.textContent).toBe('Change to red');
});
