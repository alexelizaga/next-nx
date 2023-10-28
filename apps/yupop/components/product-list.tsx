'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from 'query-string';

import { Product } from '@/models/product';

import ProductCard from './product-card';
import InfinitescrollFooter from './infinitescroll-footer';

interface ProductsListProps {
  items: Product[];
}

const ProductsList = ({ items }: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>(items);
  const [infiniteScroll, setInfiniteScroll] = useState(true);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get('q');
  const sort = searchParams.get('sort');

  const offsetRef = useRef(5);
  const qRef = useRef(q);
  const sortRef = useRef(sort);

  useEffect(() => {
    if (items) {
      setProducts(items);
      if (items.length === 5) {
        setInfiniteScroll(true);
      } else {
        setInfiniteScroll(false);
      }
      offsetRef.current = 5;
      qRef.current = q;
      sortRef.current = sort;
    }
  }, [q, sort]);

  const loadMoreProducts = useCallback(() => {
    const url = qs.stringifyUrl(
      {
        url: '/api' + pathname,
        query: {
          q: qRef.current,
          sort: sortRef.current,
          offset: offsetRef.current,
          limit: 5
        }
      },
      { skipEmptyString: true, skipNull: true }
    );
    axios.get<Product[]>(url).then(({ data }) => {
      if (data.length < 5) {
        setInfiniteScroll(false);
      } else {
        setInfiniteScroll(true);
      }
      setProducts((oldProducts) => [...oldProducts, ...data]);
    });
    offsetRef.current += 5;
  }, [pathname]);

  const handleScroll = useCallback(
    (e: any) => {
      if (
        window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight
      ) {
        loadMoreProducts();
      }
    },
    [loadMoreProducts]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="m-2 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
      <InfinitescrollFooter active={infiniteScroll} />
    </>
  );
};

export default ProductsList;
