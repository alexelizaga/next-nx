import Navbar from './_components/navbar';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="h-[65px] fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <main className="pt-[65px] h-full">{children}</main>
    </div>
  );
}
