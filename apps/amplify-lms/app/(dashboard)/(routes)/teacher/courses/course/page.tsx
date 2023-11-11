'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';

import { GetCourseQuery } from '@/amplify-lms/API';
import * as queries from '@/amplify-lms/graphql/queries';
import { CourseValues } from '@/amplify-lms/types/types';

const CoursePage = () => {
  const searchParams = useSearchParams();
  const [course, setCourse] = React.useState<CourseValues>();

  const courseId = searchParams.get('id');

  React.useEffect(() => {
    if (!courseId) return;
    API.graphql<GraphQLQuery<GetCourseQuery>>({
      query: queries.getCourse,
      variables: { id: courseId }
    }).then(({ data }) => setCourse(data?.getCourse as CourseValues));
  }, [courseId]);

  return (
    <>
      <div>ID: {course?.id}</div>
    </>
  );
};

export default CoursePage;
