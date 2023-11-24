'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import toast from 'react-hot-toast';
import { ArrowLeft, LayoutDashboard, Loader2 } from 'lucide-react';

import { GetChapterQuery, UpdateChapterMutation } from '@/amplify-lms/API';
import * as queries from '@/amplify-lms/graphql/queries';
import { ChapterValues } from '@/amplify-lms/types/types';
import IconBadge from '@/amplify-lms/components/IconBadge';
import { updateChapter } from '@/amplify-lms/graphql/mutations';

import ChapterTitleForm from './_components/chapter-title-form';

const ChapterIdPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const [chapter, setChapter] = React.useState<ChapterValues>();

  const courseId = searchParams.get('courseId');
  const chapterId = searchParams.get('chapterId');

  const getChapterById = React.useCallback(
    (chapterId: string | null | undefined) => {
      if (!chapterId) return;
      API.graphql<GraphQLQuery<GetChapterQuery>>({
        query: queries.getChapter,
        variables: { id: chapterId }
      })
        .then(({ data }) => {
          if (!data?.getChapter) router.push('/');
          setChapter(data?.getChapter as ChapterValues);
        })
        .finally(() => setLoading(false));
    },
    [router]
  );

  React.useEffect(() => {
    setLoading(true);
    getChapterById(chapterId);
  }, [chapterId, getChapterById, router]);

  const requiredFields = [chapter?.title, chapter?.description, chapter?.video];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const onSubmit = async (values: Record<string, string | number>) => {
    try {
      const { data } = await API.graphql<GraphQLQuery<UpdateChapterMutation>>({
        query: updateChapter,
        variables: {
          input: {
            id: chapterId,
            ...values
          }
        }
      });
      setChapter(data?.updateChapter as ChapterValues);
      toast.success('Chapter updated');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  if (loading || !chapter) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="animate-spin h-6 w-6 text-sky-700" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <Link
            href={`/teacher/courses/course?id=${courseId}`}
            className="flex items-center text-sm hover:opacity-75 transition mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to course setup
          </Link>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-medium">Chapter Creation</h1>
              <span className="text-sm text-slate-700">
                Complete all fields {completionText}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your chapter</h2>
            </div>
          </div>
          <ChapterTitleForm initialData={chapter} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
