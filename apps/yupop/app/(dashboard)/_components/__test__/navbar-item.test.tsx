import { act, render, screen } from '@testing-library/react';
import { IoSearchOutline } from 'react-icons/io5';

import * as hook from 'next/navigation';

import NavbarItem from '../navbar-item';

// Mocking the useFavoriteStore hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: () => ({
    pathname: '/',
    startsWith: () => true
  })
}));

describe('Test NavbarItem', () => {
  const item = {
    label: 'Browse',
    icon: IoSearchOutline,
    href: '/'
  };

  it('should render correctly', () => {
    render(<NavbarItem {...item} />);
    expect(screen.getByText(item.label)).toBeTruthy();
    expect(screen.getByLabelText(item.label)).toBeTruthy();

    const btn = screen.getByRole('button');
    expect(btn.className.includes('text-orange-700')).toBeTruthy();
  });

  it('should click button', () => {
    const pushMock = jest.fn();

    jest.spyOn(hook, 'useRouter').mockReturnValue({
      push: pushMock,
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn()
    });

    render(<NavbarItem {...item} />);

    const btn = screen.getByRole('button');

    act(() => {
      btn.click();
    });

    expect(pushMock).toHaveBeenCalledWith(item.href);
  });
});
