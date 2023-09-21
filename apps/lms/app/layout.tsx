import { ClerkProvider } from '@clerk/nextjs';

import { ToastProvider } from '@/components/providers/toaster-provider';
import './global.css';

export const metadata = {
  title: 'Welcome to lms',
  description: 'Generated by create-nx-workspace'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
