import { formatPrice } from './format';

export const byString = (string: string, q: string): boolean => {
  return string.toLowerCase().includes(q.toLowerCase());
};

export const byPrice = (price: string, q: string): boolean => {
  return formatPrice(parseInt(price)).toString().includes(q);
};
