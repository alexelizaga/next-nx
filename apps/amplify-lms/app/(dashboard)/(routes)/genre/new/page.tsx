import { WithAuthenticator } from '@/amplify-lms/components';

import GenreNewPage from '../_components/GenreNewPage';

export default async function GenreNew() {
  return (
    <WithAuthenticator>
      <GenreNewPage />
    </WithAuthenticator>
  );
}
