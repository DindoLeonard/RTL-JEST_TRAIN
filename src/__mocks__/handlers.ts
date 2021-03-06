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
  rest.get<{}, {}, { name: string; imagePath: string }[]>(
    'http://localhost:3030/toppings',
    (_req, res, ctx) => {
      return res(
        ctx.json([
          { name: 'Cherries', imagePath: '/images/cherries.png' },
          { name: 'M&Ms', imagePath: 'images/m-and-ms.png' },
          { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
        ])
      );
    }
  ),
];
