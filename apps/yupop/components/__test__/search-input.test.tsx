import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../search-input';

describe('Test SearchInput', () => {
  xtest('renders the SearchInput component', () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeTruthy();
  });

  xtest('updates the input value', () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'example' } });
    expect(searchInput).toBe('example');
  });

  xtest('clears the input value', () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText('Search');
    const clearButton = screen.getByRole('button');

    fireEvent.change(searchInput, { target: { value: 'example' } });
    expect(searchInput).toBe('example');

    fireEvent.click(clearButton);
    expect(searchInput).toBe('');
  });
});
