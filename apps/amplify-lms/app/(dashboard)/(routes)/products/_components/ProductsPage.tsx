'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { Button, Flex, Heading } from '@aws-amplify/ui-react';

import * as queries from '@/amplify-lms/src/graphql/queries';
import { ListProductsQuery, Product } from '@/amplify-lms/src/API';
import ProductsTable from '@/amplify-lms/components/ProductsTable';

const ProductsPage = () => {
  const router = useRouter();
  const [products, setProducts] = React.useState<Product[]>();

  React.useEffect(() => {
    async function grabProducts() {
      const allProducts = await API.graphql<GraphQLQuery<ListProductsQuery>>({
        query: queries.listProducts
      });
      setProducts(allProducts.data?.listProducts?.items as Product[]);
    }
    grabProducts();
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
        <Heading level={1}>All Products</Heading>
        <Button
          variation="primary"
          onClick={() => router.push('/products/new')}
        >
          Add Product
        </Button>
      </Flex>
      {products && (
        <ProductsTable
          products={products}
          onClickDelete={(p) => console.log(p)}
          admin={false}
        />
      )}
    </>
  );
};

export default ProductsPage;
