import React from 'react';
import { redirect } from 'next/navigation';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';

import { ListCoursesQuery, ListCoursesQueryVariables } from '@/amplify-lms/API';
import * as queries from '@/amplify-lms/graphql/queries';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const variables: ListCoursesQueryVariables = {
    limit: 1,
    filter: {
      and: [{ id: { eq: params.courseId } }]
    }
  };

  const { data } = await API.graphql<GraphQLQuery<ListCoursesQuery>>({
    query: queries.listCourses,
    variables
  });

  if (!data?.listCourses?.items.length) {
    return redirect('/');
  }

  return <div>ID: {data?.listCourses?.items[0]?.id}</div>;
};

export default CourseIdPage;
