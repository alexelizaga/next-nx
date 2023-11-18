'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import toast from 'react-hot-toast';
import { LayoutDashboard } from 'lucide-react';

import {
  GetCourseQuery,
  ListCategoriesQuery,
  UpdateCourseMutation
} from '@/amplify-lms/API';
import * as queries from '@/amplify-lms/graphql/queries';
import { updateCourse } from '@/amplify-lms/graphql/mutations';
import { CategoryValues, CourseValues } from '@/amplify-lms/types/types';
import IconBadge from '@/amplify-lms/components/IconBadge';

import TitleForm from './_components/title-form';
import DescriptionForm from './_components/description-form';
import ImageForm from './_components/image-form';
import CategoryForm from './_components/category-form';

const CoursePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const [course, setCourse] = React.useState<CourseValues>();
  const [categories, setCategories] = React.useState<CategoryValues[]>();

  const courseId = searchParams.get('id');

  React.useEffect(() => {
    setLoading(true);
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
  }, [courseId, router]);

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
      value: category.id
    }));
  }, [categories]);

  const requiredFields = [
    course?.title,
    course?.description,
    course?.image,
    course?.price,
    course?.categoryId
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const onSubmit = async (values: Record<string, string>) => {
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

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!course) {
    return <div>There is no course</div>;
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
      </div>
    </div>
  );
};

export default CoursePage;
