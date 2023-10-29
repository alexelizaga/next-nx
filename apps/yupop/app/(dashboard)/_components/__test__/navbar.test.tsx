import React from 'react';
import { render } from '@testing-library/react';

import Navbar from '../navbar';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: () => ({
    pathname: '/',
    startsWith: () => true
  })
}));

describe('Test Navbar', () => {
  it('renders the logo', () => {
    const { getByAltText } = render(<Navbar />);
    const logo = getByAltText('Logo');
    expect(logo).toBeTruthy();
  });

  it('renders the dashboard and browse links', () => {
    const { getByText } = render(<Navbar />);
    const browseLink = getByText('Browse');
    expect(browseLink).toBeTruthy();
  });
});
