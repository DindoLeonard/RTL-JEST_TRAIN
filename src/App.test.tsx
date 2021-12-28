import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App to be rendered and flex-column-centered', () => {
  render(<App />);

  const appWrapperElement = screen.getByTestId('app-wrapper');

  expect(appWrapperElement).toHaveStyle({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
});
