import { WithAuthenticator } from '@/amplify-lms/components';
import ProductsPage from './_components/ProductsPage';

import getProducts from '@/amplify-lms/actions/getProducts';

export default async function Products() {
  const products = await getProducts();

  return (
    <WithAuthenticator>
      <ProductsPage products={products} />
    </WithAuthenticator>
  );
}
