'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { API } from 'aws-amplify';
import { Button, Flex, Heading } from '@aws-amplify/ui-react';
import { GraphQLQuery } from '@aws-amplify/api';

import * as queries from '@/amplify-lms/graphql/queries';
import { TableValues } from '@/amplify-lms/types/types';
import { ListPlatformsQuery } from '@/amplify-lms/API';
import ItemsTable from '@/amplify-lms/components/ItemsTable';

const PlatformPage = () => {
  const router = useRouter();
  const [platforms, setPlatforms] = React.useState<TableValues[]>();

  React.useEffect(() => {
    async function grabPlatforms() {
      const allPlatforms = await API.graphql<GraphQLQuery<ListPlatformsQuery>>({
        query: queries.listPlatforms
      });
      setPlatforms(allPlatforms.data?.listPlatforms?.items as TableValues[]);
    }
    grabPlatforms();
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
        <Heading level={1}>Platforms</Heading>
        <Button
          variation="primary"
          onClick={() => router.push('/platform/new')}
        >
          Add Platforms
        </Button>
      </Flex>
      {platforms && <ItemsTable tableName="Platforms" data={platforms} />}
    </>
  );
};

export default PlatformPage;
