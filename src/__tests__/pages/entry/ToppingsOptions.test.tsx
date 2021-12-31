import React from 'react';
import { screen, render } from '@testing-library/react';
import ToppingsOptions from '../../../pages/entry/ToppingsOption';

describe('ToppingsOption Component', () => {
  it('Renders image', () => {
    render(
      <ToppingsOptions
        name="Chocolate"
        imagePath="/image/cholate-toppings.png"
      />
    );

    const imageElement = screen.getByRole('img', {
      name: /toppings$/i,
    }) as HTMLImageElement;

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toContain('toppings');
    expect(imageElement.src).toMatch(/toppings/i);
  });
});
