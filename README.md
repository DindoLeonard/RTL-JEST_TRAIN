# React Testing library && Jest

```javascript
import {render, screen} from @ 'testing-library/react'
```

render

- Create virtual DOM for argument JSX
- Access virtual DOM via `screen` global

# ASSERTIONS

- expect & matcher

# jest-dom

# Jest

React Testing Library helps with

- rendering components into virtual DOM
- search virtual DOM
- interacting with virtual DOM

Needs a test runner

- Find tests, run them, make assertions
- Jest
  - is recommended by Testing Library
  - comes with create-react-app

```shell
npm run test | yarn test
```

Jest Watch mode

- Watch for changes in files since last commit
- Only run tests related to these files
- No changes? No tests
  - Type `a` to run all test

## How does Jest work

global tests method has two arguments:

- string description
- test function

Test fails if error is thrown when running function

- assertion throw errors when expectation fails
  No error -> tests pass
- Emptry test passes!

## TDD - Test-Driven Development

- Write tests before writing code
- then write code according to "spec" by tests
- "red-green" testing
  - Tests fail before code is written

1. Write "shell/empty" function
2. Write tests
3. Expect test to fail
4. Write code
5. Tests pass!

### Why TDD?

- Makes a huge difference in how it feels to write tests
  - part of the coding process, not a "chore" to do at the end
- More efficient
  - Re-run tests "for free" after changes

## React Testing Library Philosophy

- What does React Testing Library Do?
  - Creates a virtual DOM for testing
  - and utilities for interacting with DOM
  - Allows testing without a browser

# Functional Testing vs Unit Testing

- Unit Testing

  - Isolated: mock dependencies, test internals
  - Very easy to pinpoint failures
  - !!! However further from how users interact with software
  - !!! More likely to break with refactoring

- Functional Testing
  - Include all relevant units, test behavior
  - Close to how users interact with software
  - Robust tests
  - !!! More difficult to debug failing tests

# for EVENTS

using `fireEvent` from react testing library to test events on components

```javascript
import { fireEvent } from '@testing-library/react';
import Button from './Button';

test('event is fired when clicked', () => {
  render(<Button />);

  const colorButton = screen.getByRole('button', { name: /button/i });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});
```
