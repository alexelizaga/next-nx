import { WithAuthenticator } from '@/amplify-lms/components';

import DashboardPage from './_components/DashboardPage';

export default async function Dashboard() {
  return (
    <WithAuthenticator>
      <DashboardPage />
    </WithAuthenticator>
  );
}
