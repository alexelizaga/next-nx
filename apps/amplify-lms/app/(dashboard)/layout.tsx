import { WithAuthenticator } from '@/amplify-lms/components';

import Navbar from './_components/Navbar';
import Sidebar from './_components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WithAuthenticator>
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </WithAuthenticator>
  );
};

export default DashboardLayout;
