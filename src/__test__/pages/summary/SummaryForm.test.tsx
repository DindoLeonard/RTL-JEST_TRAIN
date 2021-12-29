import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import SummaryForm from '../../../pages/summary/SummaryForm';
import userEvent from '@testing-library/user-event';

describe('Initial Conditions', () => {
  test('checkbox is unchecked', () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole('checkbox', {
      name: /Enable button/i,
    });

    expect(checkboxElement).not.toBeChecked();
  });

  test('button is disabled', () => {
    render(<SummaryForm />);

    const buttonElement = screen.getByRole('button', { name: /button/i });

    expect(buttonElement).toBeDisabled();
  });
});

describe('Checkbox and button events', () => {
  test('button is disabled if checkbox if unchecked', () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole('checkbox', {
      name: /enable button/i,
    });
    const buttonElement = screen.getByRole('button', { name: /button/i });

    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeDisabled();

    userEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
    expect(buttonElement).toBeEnabled();
  });
});

test('will show popover when checkbox is hovered', async () => {
  render(<SummaryForm />);

  // popover starts hidden
  const nullPopover = screen.queryByText(/popover/i);
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const checkboxElement = screen.getByRole('checkbox', {
    name: /enable button/i,
  });
  userEvent.hover(checkboxElement);

  const popover = screen.getByText(/popover/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(checkboxElement);

  // for disappearance
  await waitForElementToBeRemoved(() => {
    return screen.queryByText(/popover/i);
  });
});
