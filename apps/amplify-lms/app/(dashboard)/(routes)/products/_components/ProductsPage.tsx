'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Flex, Heading } from '@aws-amplify/ui-react';

import { Product } from '@/amplify-lms/API';
import ProductsTable from '@/amplify-lms/components/ProductsTable';

interface ProductsPageProps {
  products?: Product[];
}

const ProductsPage = ({ products = [] }: ProductsPageProps) => {
  const router = useRouter();

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
