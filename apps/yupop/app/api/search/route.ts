import { byPrice, byString } from '@/lib/match';
import productsMock from '@/mock/data.json';
import { Product } from '@/models/product';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  let findProduct: Product[] = productsMock.items;

  const q = request.nextUrl?.searchParams.get('q');
  const sort = request.nextUrl?.searchParams.get('sort') as
    | 'title'
    | 'description'
    | 'price'
    | 'email';
  const offset = request.nextUrl?.searchParams.get('offset');
  const limit = request.nextUrl?.searchParams.get('limit');

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

  const start = parseInt(offset ?? '');
  const end = parseInt(limit ?? '') + start;

  return NextResponse?.json(findProduct.slice(start, end));
}
