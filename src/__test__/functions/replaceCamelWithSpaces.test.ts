import React from 'react';
import replaceCamelWithSpaces from '../../functions/replaceCamelWithSpaces';

describe('spaces before camel-case capital letters', () => {
  test('works with no capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works with 1 inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works with inner multipile capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
