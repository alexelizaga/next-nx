import { render, screen } from '@testing-library/react';

import Searchbar from '../searchbar';

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

describe('Test Searchbar', () => {
  it('should render correctly', () => {
    render(<Searchbar />);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeTruthy();
  });
});
