# Mock Service Worker - SETUP

- Purpose
  - intercept network calls
  - return specified responses
- Prevents network calls during tests
- Set up test conditions using server response

# initial setup

- `npm install msw` or `yarn add msw`
- create handlers
- create test server
- Make sure test server listens during tests
  - reset after each test

## setting up the mock service worker

1. create a `mocks` folder
2. create `handlers.ts` file within that folder with this code:

```javascript
// __mocks__/handlers.js

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
```

3. create a `server.js` file in the `mocks` folder and write this code.

```javascript
// __mocks__/server.js

import { setupServer } from 'msw/node';
import { handlers } from './handlers';
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
```

4. add this code to `src/setupTests.ts`

```javascript
// src/setupTests.js
import { server } from './__mocks__/server.js';
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
```

# Summary

1. create a handler
2. create server
3. update `setupTests` to listen for requests
4. `await findBy<query>` or `await findAllBy<query>` to find asynchronous DOM update elements
