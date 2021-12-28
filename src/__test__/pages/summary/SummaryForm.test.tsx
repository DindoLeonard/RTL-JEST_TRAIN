import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../../../pages/summary/SummaryForm';

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

    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
    expect(buttonElement).toBeEnabled();
  });
});
