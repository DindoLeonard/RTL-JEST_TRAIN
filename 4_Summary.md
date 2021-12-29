# SummaryForm component review - test

- testing flow where checkbox controls whether button is disabled
- mouseover for popup to show
  - `userEvent.hover` and `userEvent.unhover` methods
  - `queryByText` and to `expect().not.toBeInTheDocument()` for element starting out not on page
  - `async waitForElementToBeRemoved` for element that was there and then disappeared
- `test not wrapped in act (...)` warning
