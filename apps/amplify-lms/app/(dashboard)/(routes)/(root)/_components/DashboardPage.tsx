'use client';

import { Button, Flex, Heading, useAuthenticator } from '@aws-amplify/ui-react';

const DashboardPage = () => {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Flex justifyContent="center" alignItems="center" direction="column">
      <Heading level={1}>Hello world</Heading>
      <Button onClick={signOut} variation="primary">
        SignOut
      </Button>
    </Flex>
  );
};

export default DashboardPage;
