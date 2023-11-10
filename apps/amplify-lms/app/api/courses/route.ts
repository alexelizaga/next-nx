import { withSSRContext } from 'aws-amplify';
import { NextRequest, NextResponse } from 'next/server';

import { createCourse } from '@/amplify-lms/graphql/mutations';

export async function POST(req: NextRequest) {
  try {
    const { title } = await req.json();

    const SSR = withSSRContext({ req });

    const { data } = await SSR.API.graphql({
      query: createCourse,
      variables: {
        input: {
          title,
        },
      },
    });

    return NextResponse.json(data.createCourse);
  } catch (error) {
    console.log('[COURSES]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
