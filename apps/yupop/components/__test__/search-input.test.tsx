import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import SearchInput from '../search-input';

import nextNavigation from 'next/navigation';
import qs from 'query-string';
import * as debounce from '@/hooks/use-debounce';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn()
  })),
  useSearchParams: jest.fn(),
  usePathname: jest.fn()
}));

jest.mock('query-string', () => ({
  stringifyUrl: jest.fn()
}));

describe('Test SearchInput', () => {
  test('renders the SearchInput component', () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeTruthy();
  });

  test('updates the input value', () => {
    const value = 'iphone';

    const pushMock = jest.fn();
    jest.spyOn(nextNavigation, 'useRouter').mockReturnValue({
      push: pushMock
    } as any);
    const spyQs = jest
      .spyOn(qs, 'stringifyUrl')
      .mockReturnValue(`/search?q=${value}`);
    const spyDebounce = jest.spyOn(debounce, 'useDebounce');

    render(<SearchInput />);
    const searchInput: HTMLInputElement = screen.getByPlaceholderText('Search');
    act(() => {
      fireEvent.change(searchInput, { target: { value } });
    });

    expect(searchInput.value).toBe(value);
    expect(spyDebounce).toBeCalledWith(value);
    expect(spyQs).toHaveBeenCalled();
    expect(pushMock).toHaveBeenCalledWith(`/search?q=${value}`);
  });

  test('clears the input value', () => {
    render(<SearchInput />);
    const searchInput: HTMLInputElement = screen.getByPlaceholderText('Search');
    const clearButton = screen.getByRole('button');

    fireEvent.change(searchInput, { target: { value: 'example' } });
    expect(searchInput.value).toBe('example');

    act(() => {
      fireEvent.click(clearButton);
    });
    expect(searchInput.value).toBe('');
  });
});
