import { byPrice, byString } from '@/lib/match';
import productsMock from '@/mock/data.json';
import { Product } from '@/models/product';

type GetProducts = {
  q?: string;
};

export const getProducts = ({ q }: GetProducts): Product[] => {
  const products: Product[] = productsMock.items;

  if (!q) return products;

  const findProduct: Product[] = products.filter(
    (product) =>
      byString(product.title, q) ||
      byString(product.description, q) ||
      byString(product.email, q) ||
      byPrice(product.price, q)
  );

  return [...findProduct];
};
