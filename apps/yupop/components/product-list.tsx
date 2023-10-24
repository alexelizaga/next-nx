'use client';

import { Product } from '@/models/product';
import ProductCard from './product-card';

interface ProductsListProps {
  items: Product[];
}

const ProductsList = ({ items }: ProductsListProps) => {
  return (
    <div className="m-2 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {items.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
