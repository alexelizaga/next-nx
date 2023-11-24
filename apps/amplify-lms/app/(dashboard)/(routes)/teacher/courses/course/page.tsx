'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import toast from 'react-hot-toast';
import {
  CircleDollarSign,
  LayoutDashboard,
  ListChecks,
  Loader2
} from 'lucide-react';

import {
  CreateChapterMutation,
  GetCourseQuery,
  ListCategoriesQuery,
  UpdateCourseMutation
} from '@/amplify-lms/API';
import * as queries from '@/amplify-lms/graphql/queries';
import { createChapter, updateCourse } from '@/amplify-lms/graphql/mutations';
import { CategoryValues, CourseValues } from '@/amplify-lms/types/types';
import IconBadge from '@/amplify-lms/components/IconBadge';

import TitleForm from './_components/title-form';
import DescriptionForm from './_components/description-form';
import ImageForm from './_components/image-form';
import CategoryForm from './_components/category-form';
import PriceForm from './_components/price-form';
import ChaptersForm from './_components/chapters-form';

const CoursePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const [course, setCourse] = React.useState<CourseValues>();
  const [categories, setCategories] = React.useState<CategoryValues[]>();

  const courseId = searchParams.get('id');

  const getCourseById = React.useCallback(
    (courseId: string | null | undefined) => {
      if (!courseId) return;
      API.graphql<GraphQLQuery<GetCourseQuery>>({
        query: queries.getCourse,
        variables: { id: courseId }
      })
        .then(({ data }) => {
          if (!data?.getCourse) router.push('/');
          setCourse(data?.getCourse as CourseValues);
        })
        .finally(() => setLoading(false));
    },
    [router]
  );

  React.useEffect(() => {
    setLoading(true);
    getCourseById(courseId);
  }, [courseId, getCourseById, router]);

  React.useEffect(() => {
    API.graphql<GraphQLQuery<ListCategoriesQuery>>({
      query: queries.listCategories
    })
      .then(({ data }) => {
        setCategories(data?.listCategories?.items as CategoryValues[]);
      })
      .finally(() => setLoading(false));
  }, [courseId, router]);

  const categoryOptions = React.useMemo(() => {
    return categories?.map((category) => ({
      label: category.name,
      id: category.id
    }));
  }, [categories]);

  const requiredFields = [
    course?.title,
    course?.description,
    course?.image,
    course?.price,
    course?.categoryId,
    course?.Chapters?.items.some((chapter) => chapter?.isPublished)
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const onSubmit = async (values: Record<string, string | number>) => {
    try {
      const { data } = await API.graphql<GraphQLQuery<UpdateCourseMutation>>({
        query: updateCourse,
        variables: {
          input: {
            id: courseId,
            ...values
          }
        }
      });
      setCourse(data?.updateCourse as CourseValues);
      toast.success('Course updated');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const onSubmitChapter = async (values: Record<string, string>) => {
    try {
      await API.graphql<GraphQLQuery<CreateChapterMutation>>({
        query: createChapter,
        variables: {
          input: {
            ...values,
            position: course?.Chapters?.items.length
              ? course?.Chapters?.items.length + 1
              : 1,
            isPublished: false,
            isFree: false,
            courseId: course?.id
          }
        }
      });

      getCourseById(course?.id);
      toast.success('Chapter created');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  if (loading || !course) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="animate-spin h-6 w-6 text-sky-700" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course setup</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div>
          <div className="flex items-center gap-x-3.5">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">Customize your course</h2>
          </div>
          <TitleForm initialData={course} onSubmit={onSubmit} />
          <DescriptionForm initialData={course} onSubmit={onSubmit} />
          <ImageForm initialData={course} onSubmit={onSubmit} />
          <CategoryForm
            initialData={course}
            options={categoryOptions}
            onSubmit={onSubmit}
          />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl">Course chapters</h2>
            </div>
            <ChaptersForm initialData={course} onSubmit={onSubmitChapter} />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign} />
              <h2 className="text-xl">Sell your course</h2>
            </div>
            <PriceForm initialData={course} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
