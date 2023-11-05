'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Flex, Heading } from '@aws-amplify/ui-react';
import { GraphQLQuery } from '@aws-amplify/api';

import * as queries from '@/amplify-lms/graphql/queries';
import { TableValues } from '@/amplify-lms/types/types';
import { ListGenresQuery } from '@/amplify-lms/API';
import { API } from 'aws-amplify';
import ItemsTable from '@/amplify-lms/components/ItemsTable';

const GenrePage = () => {
  const router = useRouter();
  const [genre, setGenre] = React.useState<TableValues[]>();

  React.useEffect(() => {
    async function grabGenres() {
      const allGenres = await API.graphql<GraphQLQuery<ListGenresQuery>>({
        query: queries.listGenres
      });
      setGenre(allGenres.data?.listGenres?.items as TableValues[]);
    }
    grabGenres();
  }, []);

  return (
    <>
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
        <Heading level={1}>Genres</Heading>
        <Button variation="primary" onClick={() => router.push('/genre/new')}>
          Add Genres
        </Button>
      </Flex>
      {genre && <ItemsTable tableName="Genres" data={genre} />}
    </>
  );
};

export default GenrePage;
