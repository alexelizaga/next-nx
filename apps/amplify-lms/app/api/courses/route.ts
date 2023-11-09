import { withSSRContext } from 'aws-amplify';
import { NextResponse } from 'next/server';

import { createCourse } from '@/amplify-lms/graphql/mutations';

export async function POST(req: Request) {
  try {
    const { title, userId } = await req.json();

    const SSR = withSSRContext({ req } as any);

    const { data } = await SSR.API.graphql({
      query: createCourse,
      variables: {
        input: {
          title,
          userId,
        },
      },
    });

    return NextResponse.json(data.createCourse);
  } catch (error) {
    console.log('[COURSES]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
