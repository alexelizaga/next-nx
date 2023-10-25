import './global.css';

export const metadata = {
  title: 'Welcome to apps/yupop',
  description: 'Generated by create-nx-workspace'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <body>{children}</body>
      </body>
    </html>
  );
}
