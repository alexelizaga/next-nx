'use client';

import { Flex, Heading } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

import ProductCreateForm from '@/amplify-lms/components/ui-components/ProductCreateForm';

const ProductNewPage = () => {
  const router = useRouter();
  return (
    <Flex alignItems="center" direction="column" gap="20px" height="100vh">
      <Heading level={1}>Create new Product</Heading>
      <Flex justifyContent="center">
        <ProductCreateForm
          width="340px"
          border="1px solid black"
          borderRadius="1 rem"
          onSuccess={() => router.push('/products')}
        />
      </Flex>
    </Flex>
  );
};

export default ProductNewPage;
