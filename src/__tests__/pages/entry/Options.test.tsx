import React from 'react';
import { render, screen } from '@testing-library/react';
import Options from '../../../pages/entry/Options';

describe('Options component', () => {
  test('displays image for each scoop option from server', async () => {
    render(<Options optionType="scoops" />);

    // find images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const allScoopsText = scoopImages.map((element) => {
      const imageElement = element as HTMLImageElement;
      return imageElement.alt;
    });

    expect(allScoopsText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });
});

describe('ToppingsOption component', () => {
  it('displays toppings image for each toppings data fetched from server', async () => {
    render(<Options optionType="toppings" />);

    const toppingsImageArray = await screen.findAllByRole('img', {
      name: /toppings$/i,
    });

    expect(toppingsImageArray).toHaveLength(3);

    const allToppingsText = toppingsImageArray.map((element) => {
      const imageElement = element as HTMLImageElement;

      return imageElement.alt;
    });

    expect(allToppingsText).toEqual([
      'Cherries toppings',
      'M&Ms toppings',
      'Hot fudge toppings',
    ]);
  });
});
