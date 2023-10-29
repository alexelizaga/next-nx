import { render } from '@testing-library/react';
import nextNavigation from 'next/navigation';

import SearchPage from '../page';

jest.mock('query-string', () => ({
  stringifyUrl: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn()
}));

jest.mock('@/actions/get-products', () => ({
  getProducts: jest.fn().mockResolvedValue([])
}));

// eslint-disable-next-line react/display-name
jest.mock('@/components/product-list', () => () => {
  return <div></div>;
});

describe('Test SearchPage', () => {
  it('should render correctly', () => {
    const getMock = jest.fn();
    const pushMock = jest.fn();
    jest.spyOn(nextNavigation, 'useSearchParams').mockReturnValue({
      get: getMock
    } as any);
    jest.spyOn(nextNavigation, 'useRouter').mockReturnValue({
      push: pushMock
    } as any);

    render(
      <SearchPage
        searchParams={{
          q: 'iphone',
          sort: 'title'
        }}
      />
    );
  });
});
