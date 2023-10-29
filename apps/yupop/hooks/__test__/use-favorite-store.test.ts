import { act, renderHook } from '@testing-library/react';

import { Product } from '@/models/product';

import { useFavoriteStore } from '../use-favorite-store';

test('initial state', () => {
  const { result } = renderHook(() => useFavoriteStore());
  const { isOpen, items, onToggle, add, remove } = result.current;

  expect(isOpen).toBe(false);
  expect(items).toEqual([]);
  expect(typeof onToggle).toBe('function');
  expect(typeof add).toBe('function');
  expect(typeof remove).toBe('function');
});

test('should toggles isOpen state', () => {
  const { result } = renderHook(() => useFavoriteStore());
  const { onToggle } = result.current;

  act(() => {
    onToggle();
  });

  expect(result.current.isOpen).toBe(true);

  act(() => {
    onToggle();
  });

  expect(result.current.isOpen).toBe(false);
});

test('should adds a product to items', () => {
  const { result } = renderHook(() => useFavoriteStore());
  const { add } = result.current;

  const product = { title: 'Product 1' } as Product;

  act(() => {
    add(product);
  });

  expect(result.current.items).toContain(product);

  act(() => {
    add(product); // Adding the same product again
  });

  expect(result.current.items).toHaveLength(1); // Should not add duplicates
});

test('should removes a product from items', () => {
  const { result } = renderHook(() => useFavoriteStore());
  const { add, remove } = result.current;

  const product = { title: 'Product 1' } as Product;

  act(() => {
    add(product);
  });

  act(() => {
    remove('Product 1');
  });

  expect(result.current.items).toEqual([]);
});
