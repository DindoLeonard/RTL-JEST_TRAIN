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
