import { act, render, screen } from '@testing-library/react';

import * as hook from '@/hooks/use-favorite-store';
import FavoriteButton from '../favorite-button';

// Mock useFavoriteStore
jest.mock('@/hooks/use-favorite-store', () => ({
  useFavoriteStore: jest.fn()
}));

describe('Test FavoriteButton', () => {
  const sampleProduct = {
    title: 'Sample Product',
    description: 'This is a sample product',
    email: 'sample@example.com',
    image: 'https://sample-image.jpg',
    price: '19.99'
  };

  it('should render correctly', () => {
    const onToggleMock = jest.fn();
    jest.spyOn(hook, 'useFavoriteStore').mockReturnValue({
      onToggle: onToggleMock,
      add: jest.fn(),
      remove: jest.fn(),
      items: [sampleProduct]
    });
    render(<FavoriteButton />);

    expect(screen.getByText(1)).toBeTruthy();

    const btn = screen.getByRole('button');

    act(() => {
      btn.click();
    });

    expect(onToggleMock).toHaveBeenCalled();
  });
});
