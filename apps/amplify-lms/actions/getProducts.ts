import { headers } from 'next/headers';
import { withSSRContext } from 'aws-amplify';

import { listProducts } from '../src/graphql/queries';
import { Product } from '../src/API';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const req = {
      headers: {
        cookie: headers().get('cookie'),
      },
    };

    const SSR = withSSRContext({ req });

    const { data } = await SSR.API.graphql({ query: listProducts });

    return data.listProducts.items as Product[];
  } catch (error) {
    console.log('[GET_PRODUCTS]', error);
    return [];
  }
};

export default getProducts;
