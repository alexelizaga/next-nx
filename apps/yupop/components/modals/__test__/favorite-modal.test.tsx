import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { FavoriteModal } from '../favorite-modal';

const sampleProducts = [
  {
    title: 'Sample Product 1',
    description: 'This is sample product 1',
    email: 'sample1@example.com',
    image: 'https://sample1-image.jpg',
    price: '19.99'
  },
  {
    title: 'Sample Product 2',
    description: 'This is sample product 2',
    email: 'sample2@example.com',
    image: 'https://sample2-image.jpg',
    price: '29.99'
  }
];

// Mocking the useFavoriteStore hook
jest.mock('@/hooks/use-favorite-store', () => ({
  useFavoriteStore: () => ({
    isOpen: true,
    add: jest.fn(),
    remove: jest.fn(),
    items: sampleProducts
  })
}));

describe('Test FavoriteModal', () => {
  test('Render component correctly', () => {
    render(<FavoriteModal />);

    expect(screen.getByText(sampleProducts[0].title)).toBeTruthy();
    expect(screen.getByAltText(sampleProducts[0].title)).toBeTruthy();
    expect(screen.getByText(sampleProducts[1].title)).toBeTruthy();
    expect(screen.getByAltText(sampleProducts[1].title)).toBeTruthy();
  });

  test('Filter favorites correctly', () => {
    render(<FavoriteModal />);

    const searchInput: HTMLInputElement = screen.getByPlaceholderText('Search');
    act(() =>
      fireEvent.change(searchInput, { target: { value: 'Sample Product 1' } })
    );

    expect(searchInput.value).toBe('Sample Product 1');
    expect(screen.getByText(sampleProducts[0].title)).toBeTruthy();
    expect(() => screen.getByText(sampleProducts[1].title)).toThrow();

    const clearBtn: HTMLButtonElement = screen.getByLabelText('modalClose');
    act(() => clearBtn.click());
    expect(searchInput.value).toBe('');
  });
});
