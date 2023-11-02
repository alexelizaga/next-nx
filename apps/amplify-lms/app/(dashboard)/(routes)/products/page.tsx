import { WithAuthenticator } from '@/amplify-lms/components';
import ProductsPage from './_components/ProductsPage';

export default async function Products() {
  return (
    <WithAuthenticator>
      <ProductsPage />
    </WithAuthenticator>
  );
}
