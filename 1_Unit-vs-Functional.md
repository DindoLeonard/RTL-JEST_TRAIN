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
