'use client';

import React from 'react';
import { ListCoursesQuery, ListCoursesQueryVariables } from '@/amplify-lms/API';
import { GraphQLQuery } from '@aws-amplify/api';
import * as queries from '@/amplify-lms/graphql/queries';
import { API } from 'aws-amplify';

interface CourseIdPageProps {
  courseId: string;
}

const CourseIdPage = ({ courseId }: CourseIdPageProps) => {
  const [course, setCourse] = React.useState<any>();
  const variables: ListCoursesQueryVariables = {
    limit: 1,
    filter: {
      and: [{ id: { eq: courseId } }]
    }
  };

  const loadCourse = async () => {
    API.graphql<GraphQLQuery<ListCoursesQuery>>({
      query: queries.listCourses,
      variables
    }).then(({ data }) => {
      if (data?.listCourses?.items[0]) {
        setCourse(data?.listCourses?.items[0]);
      }
    });
  };

  React.useEffect(() => {
    loadCourse();
  }, []);

  return <div>ID: {course?.id}</div>;
};

export default CourseIdPage;
