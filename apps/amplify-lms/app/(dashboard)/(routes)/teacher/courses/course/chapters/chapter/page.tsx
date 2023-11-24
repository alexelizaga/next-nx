'use client';

import { useSearchParams } from 'next/navigation';

const ChapterIdPage = () => {
  const searchParams = useSearchParams();

  const courseId = searchParams.get('courseId');
  const chapterId = searchParams.get('chapterId');

  return (
    <div>
      <div>ChapterId: {chapterId}</div>
      <div>CourseId: {courseId}</div>
    </div>
  );
};

export default ChapterIdPage;
