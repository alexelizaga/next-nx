'use client';

import { Button, Flex, Heading } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

const PlatformPage = () => {
  const router = useRouter();

  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap="1rem"
      width="100%"
      padding="1rem"
      backgroundColor="white"
      className="underline"
    >
      <Heading level={1}>Platforms</Heading>
      <Button variation="primary" onClick={() => router.push('/platform/new')}>
        Add Platforms
      </Button>
    </Flex>
  );
};

export default PlatformPage;
