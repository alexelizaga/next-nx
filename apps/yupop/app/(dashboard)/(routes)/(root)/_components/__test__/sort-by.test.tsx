import { act, render, screen } from '@testing-library/react';

import nextNavigation from 'next/navigation';
import qs from 'query-string';

import SortBy from '../sort-by';

jest.mock('query-string', () => ({
  stringifyUrl: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn()
}));

describe('Test SortBy', () => {
  const Sort = [
    {
      label: 'Title',
      value: 'title'
    },
    {
      label: 'Description',
      value: 'description'
    },
    {
      label: 'Price',
      value: 'price'
    },
    {
      label: 'Email',
      value: 'email'
    }
  ];

  it('should render correctly', () => {
    const getMock = jest.fn();
    jest.spyOn(nextNavigation, 'useSearchParams').mockReturnValue({
      get: getMock
    } as any);

    render(<SortBy />);

    const sortBtn = screen.getByRole('button');
    expect(sortBtn.innerHTML).toContain('Sort by');
    expect(screen.getByLabelText('upIcon')).toBeTruthy();
  });

  it('buttons should work', () => {
    const getMock = jest.fn();
    const pushMock = jest.fn();
    jest.spyOn(nextNavigation, 'useSearchParams').mockReturnValue({
      get: getMock
    } as any);
    jest.spyOn(qs, 'stringifyUrl').mockReturnValue('/search?sort=title');
    jest.spyOn(nextNavigation, 'useRouter').mockReturnValue({
      push: pushMock
    } as any);

    render(<SortBy />);

    const sortBtn = screen.getByRole('button');
    act(() => {
      sortBtn.click();
    });

    expect(screen.getByLabelText('downIcon')).toBeTruthy();

    Sort.forEach((value) => {
      expect(screen.getByText(value.label)).toBeTruthy();
    });

    const modalBtn: HTMLButtonElement = screen.getByLabelText(
      `${Sort[0].value}Btn`
    );

    act(() => {
      modalBtn.click();
    });

    expect(pushMock).toBeCalledWith(`/search?sort=${Sort[0].value}`);
  });
});
