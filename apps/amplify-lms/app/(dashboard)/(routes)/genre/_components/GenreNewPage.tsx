'use client';

import GenreCreateForm from '@/amplify-lms/ui-components/GenreCreateForm';
import { Flex, Heading } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

const GenreNewPage = () => {
  const router = useRouter();
  return (
    <div>
      <>
        <Heading level={1}>Create new Genre</Heading>
        <Flex justifyContent="center">
          <GenreCreateForm
            width="340px"
            border="1px solid black"
            borderRadius="1 rem"
            onSuccess={() => router.push('/genre')}
          />
        </Flex>
      </>
    </div>
  );
};

export default GenreNewPage;
