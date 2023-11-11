'use client';

import { useSearchParams } from 'next/navigation';

const CourseId = () => {
  const { get } = useSearchParams();

  return <div>ID: {get('id')}</div>;
};

export default CourseId;
