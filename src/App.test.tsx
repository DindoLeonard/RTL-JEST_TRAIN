import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render a text of Learn React', () => {
  // render the DOM
  render(<App />);

  // link an element
  const linkElement = screen.getByText(/learn react/i);

  // assertion, expect + matcher
  expect(linkElement.textContent).toBe('Learn React');
});
