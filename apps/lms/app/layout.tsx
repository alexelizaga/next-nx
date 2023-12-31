import { ClerkProvider } from '@clerk/nextjs';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';

import { ToastProvider } from '@/components/providers/toaster-provider';
import './global.css';
import { uploadRouter } from './api/uploadthing/core';
import { ConfettiProvider } from '@/components/providers/confetti-provider';

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
          <NextSSRPlugin routerConfig={extractRouterConfig(uploadRouter)} />
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
