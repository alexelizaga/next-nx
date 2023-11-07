// import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { withSSRContext } from 'aws-amplify';

import { listProducts } from '@/amplify-lms/graphql/queries';

export async function GET(request: Request) {
  try {
    const SSR = withSSRContext({ request } as any);

    const { data } = await SSR.API.graphql({ query: listProducts });

    return NextResponse.json(data.listProducts.items);
  } catch (error) {
    console.log('[PRODUCTS]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
