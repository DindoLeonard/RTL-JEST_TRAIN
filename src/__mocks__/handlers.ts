import { rest } from 'msw';

export const handlers = [
  rest.get<{}, {}, { name: string; imagePath: string }[]>(
    'http://localhost:3030/scoops',
    (_req, res, ctx) => {
      return res(
        ctx.json([
          { name: 'Chocolate', imagePath: '/images/chocolate.png' },
          { name: 'Vanilla', imagePath: '/images/vanilla.png' },
        ])
      );
    }
  ),
];
