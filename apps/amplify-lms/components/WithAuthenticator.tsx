'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

import '@aws-amplify/ui-react/styles.css';

import { withAuthenticator, View } from '@aws-amplify/ui-react';

const WithAuthenticator = ({ children }: { children: React.ReactNode }) => {
  return (
    <View as="div" height="100vh" width="100%">
      {children}
    </View>
  );
};

export default withAuthenticator(WithAuthenticator);
