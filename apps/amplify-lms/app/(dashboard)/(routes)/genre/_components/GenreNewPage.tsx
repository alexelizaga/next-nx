'use client';

import GenreCreateForm from '@/amplify-lms/components/ui-components/GenreCreateForm';
import { Button, Flex, Heading } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

import { API } from 'aws-amplify';
import { createGenre } from '@/amplify-lms/graphql/mutations';

const GenreNewPage = () => {
  const router = useRouter();

  const addGenre = async () => {
    const newGenre = await API.graphql({
      query: createGenre,
      variables: {
        input: {
          name: 'Lorem ipsum dolor sit amet'
        }
      }
    });
    console.log({ newGenre });
  };

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
        <Button onClick={addGenre}>Add</Button>
      </>
    </div>
  );
};

export default GenreNewPage;
