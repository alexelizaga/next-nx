import { WithAuthenticator } from '@/amplify-lms/components';
import ProductsPage from './_components/ProductsPage';

import axios from 'axios';
import { Product } from '@/amplify-lms/API';

export default async function Products() {
  // const products = await getProducts();
  const { data: products } = await axios.get<Product[]>(
    'http://localhost:3000/api/products'
  );

  return (
    <WithAuthenticator>
      <ProductsPage products={products} />
    </WithAuthenticator>
  );
}
