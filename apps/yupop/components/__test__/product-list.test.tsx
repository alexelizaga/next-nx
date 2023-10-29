import { fireEvent, render, screen } from '@testing-library/react';
import nextNavigation from 'next/navigation';
import axios from 'axios';

import mockProducts from '@/mock/data.json';
import ProductsList from '../product-list';
import { act } from 'react-dom/test-utils';

jest.mock('query-string', () => ({
  stringifyUrl: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn()
}));

jest.mock('axios');

describe('Test ProductList', () => {
  it('should render correctly', () => {
    const getMock = jest.fn();
    jest.spyOn(nextNavigation, 'useSearchParams').mockReturnValue({
      get: getMock
    } as any);

    render(<ProductsList items={mockProducts.items} />);

    mockProducts.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeTruthy();
      expect(screen.getByText(item.email)).toBeTruthy();
      expect(screen.getByAltText(item.title)).toBeTruthy();
    });
  });

  it('should test infinite scroll', () => {
    const getMock = jest.fn();
    jest.spyOn(nextNavigation, 'useSearchParams').mockReturnValue({
      get: getMock
    } as any);

    const spyAxios = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({ data: mockProducts.items.slice(6, 16) })
      .mockResolvedValueOnce({ data: mockProducts.items.slice(17, 18) });

    render(<ProductsList items={mockProducts.items.slice(0, 5)} />);

    act(() => {
      fireEvent.scroll(window, {
        target: {
          documentElement: { scrollTop: 0, scrollHeight: 0 }
        }
      });

      fireEvent.scroll(window, {
        target: {
          documentElement: { scrollTop: 0, scrollHeight: 0 }
        }
      });
    });

    expect(spyAxios).toBeCalledTimes(2);
  });
});
