import { byPrice, byString } from '@/lib/match';
import productsMock from '@/mock/data.json';
import { Product } from '@/models/product';

type GetProducts = {
  q?: string;
  sort?: 'title' | 'description' | 'price' | 'email';
  limit?: number;
  offset?: number;
};

export const getProducts = ({
  q,
  sort,
  limit = 5,
  offset = 0,
}: GetProducts): Product[] => {
  let findProduct: Product[] = productsMock.items;

  if (q) {
    findProduct = findProduct.filter(
      (product) =>
        byString(product.title, q) ||
        byString(product.description, q) ||
        byString(product.email, q) ||
        byPrice(product.price, q)
    );
  }

  if (sort && sort !== 'price') {
    findProduct = findProduct.sort(function (a, b) {
      return a[sort].localeCompare(b[sort]);
    });
  }

  if (sort && sort === 'price') {
    findProduct = findProduct.sort(function (a, b) {
      return +a[sort] - +b[sort];
    });
  }

  return findProduct.slice(offset, limit);
};
