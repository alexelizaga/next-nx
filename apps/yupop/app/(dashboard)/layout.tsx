import Navbar from './_components/navbar';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="fixed h-[64px] inset-y-0 w-full z-30">
        <Navbar />
      </div>
      <main className="pt-[64px] h-full">{children}</main>
    </div>
  );
}
