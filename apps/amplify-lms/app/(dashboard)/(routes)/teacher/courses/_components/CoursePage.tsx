'use client';

import { Button } from '@aws-amplify/ui-react';
import Link from 'next/link';

const CoursePage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button size="small">New Course</Button>
      </Link>
    </div>
  );
};

export default CoursePage;
