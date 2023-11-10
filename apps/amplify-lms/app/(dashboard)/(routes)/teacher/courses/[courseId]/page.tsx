import React from 'react';
import CourseIdPage from '../_components/CourseIdPage';

const CourseId = ({ params }: { params: { courseId: string } }) => {
  return <CourseIdPage courseId={params.courseId} />;
};

export default CourseId;
