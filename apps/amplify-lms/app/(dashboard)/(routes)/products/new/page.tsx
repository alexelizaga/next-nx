import { WithAuthenticator } from '@/amplify-lms/components';
import ProductNewPage from '../_components/ProductNewPage';

export default async function PlatformNew() {
  return (
    <WithAuthenticator>
      <ProductNewPage />
    </WithAuthenticator>
  );
}
