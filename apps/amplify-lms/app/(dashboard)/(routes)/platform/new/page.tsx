import { WithAuthenticator } from '@/amplify-lms/components';
import PlatformNewPage from './_components/PlatformNewPage';

export default async function PlatformNew() {
  return (
    <WithAuthenticator>
      <PlatformNewPage />
    </WithAuthenticator>
  );
}
