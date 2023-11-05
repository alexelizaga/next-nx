'use client';

import { Flex, Heading } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

import PlatformCreateForm from '@/amplify-lms/src/ui-components/PlatformCreateForm';

const PlatformNewPage = () => {
  const router = useRouter();
  return (
    <div>
      <>
        <Heading level={1}>Create new Platform</Heading>
        <Flex justifyContent="center">
          <PlatformCreateForm
            width="340px"
            border="1px solid black"
            borderRadius="1 rem"
            onSuccess={() => router.push('/platform')}
          />
        </Flex>
      </>
    </div>
  );
};

export default PlatformNewPage;
