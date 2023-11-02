'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';

Amplify.configure(awsExports);

import '@aws-amplify/ui-react/styles.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

const WithAuthenticator = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default withAuthenticator(WithAuthenticator);
