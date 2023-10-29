import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import * as hook from '@/hooks/use-favorite-store';
import ProductCard from '../product-card';

// Mocking the useFavoriteStore hook
// jest.mock('@/hooks/use-favorite-store', () => ({
//   useFavoriteStore: () => ({
//     add: jest.fn(),
//     remove: jest.fn(),
//     items: []
//   })
// }));

// Mock useFavoriteStore
jest.mock('@/hooks/use-favorite-store', () => ({
  useFavoriteStore: jest.fn()
}));

describe('Test ProductCard', () => {
  const sampleProduct = {
    title: 'Sample Product',
    description: 'This is a sample product',
    email: 'sample@example.com',
    image: 'https://sample-image.jpg',
    price: '19.99'
  };

  const heart = [
    '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path></svg>',
    '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path></svg>'
  ];

  it('renders the component', () => {
    // Mock the items from useFavoriteStore
    jest.spyOn(hook, 'useFavoriteStore').mockReturnValue({ items: [] });

    render(<ProductCard {...sampleProduct} />);
    expect(screen.getByText('Sample Product')).toBeTruthy();
    expect(screen.getByText('This is a sample product')).toBeTruthy();
    expect(screen.getByText('sample@example.com')).toBeTruthy();
    expect(screen.getByText('19,99 €')).toBeTruthy();
  });

  it('add favorite item on button click', () => {
    // Mock the remove function from useFavoriteStore
    const addMock = jest.fn();

    jest.spyOn(hook, 'useFavoriteStore').mockReturnValue({
      add: addMock,
      items: []
    });

    render(<ProductCard {...sampleProduct} />);

    const button: HTMLButtonElement = screen.getByRole('button');
    expect(button.innerHTML).toEqual(heart[0]);

    fireEvent.click(button);
    expect(addMock).toHaveBeenCalledWith(sampleProduct);
  });

  it('remove favorite item on button click', () => {
    // Mock the remove function from useFavoriteStore
    const removeMock = jest.fn();

    jest.spyOn(hook, 'useFavoriteStore').mockReturnValueOnce({
      remove: removeMock,
      items: [sampleProduct]
    });

    render(<ProductCard {...sampleProduct} />);

    const button: HTMLButtonElement = screen.getByRole('button');
    expect(button.innerHTML).toEqual(heart[1]);

    fireEvent.click(button);
    expect(removeMock).toHaveBeenCalledWith(sampleProduct.title);
  });
});
