import { getProducts } from '../get-products';
import productsMock from '@/mock/data.json';

describe('Test getProducts', () => {
  it('should return an array of products when not passed a search query', () => {
    const result = getProducts({});
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(productsMock.items.slice(0, 5));
  });

  it('should filter products by search query', () => {
    const q = productsMock.items[0].title;
    const result = getProducts({ q });
    expect(Array.isArray(result)).toBe(true);
    expect(
      result.every(
        (product) =>
          product.title.includes(q) ||
          product.description.includes(q) ||
          product.email.includes(q)
      )
    ).toBe(true);
  });

  it('should sort products by title', () => {
    const sort = 'title';
    const result = getProducts({ sort });
    const expected = productsMock.items
      .sort(function (a, b) {
        return a[sort].localeCompare(b[sort]);
      })
      .slice(0, 5);

    expect(result).toStrictEqual(expected);
  });

  it('should sort products by price', () => {
    const sort = 'price';
    const result = getProducts({ sort });
    const expected = productsMock.items
      .sort(function (a, b) {
        return +a[sort] - +b[sort];
      })
      .slice(0, 5);

    expect(result).toStrictEqual(expected);
  });
});
