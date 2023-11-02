import { WithAuthenticator } from '@/amplify-lms/components';

import GenrePage from './_components/GenrePage';

export default async function Genre() {
  return (
    <WithAuthenticator>
      <GenrePage />
    </WithAuthenticator>
  );
}
