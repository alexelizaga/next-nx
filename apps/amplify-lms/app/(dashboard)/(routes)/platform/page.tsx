import { WithAuthenticator } from '@/amplify-lms/components';
import PlatformPage from './_components/PlatformPage';

export default async function Platform() {
  return (
    <WithAuthenticator>
      <PlatformPage />
    </WithAuthenticator>
  );
}
