'use client';

import React from 'react';
import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pencil } from 'lucide-react';
import { Button, Flex, Input, Label } from '@aws-amplify/ui-react';

import { CourseValues } from '@/amplify-lms/types/types';
import { updateCourse } from '@/amplify-lms/graphql/mutations';
import { API } from 'aws-amplify';
import toast from 'react-hot-toast';
import { UpdateCourseMutation } from '@/amplify-lms/API';
import { GraphQLQuery } from '@aws-amplify/api';
import { useRouter } from 'next/navigation';

interface TitleFormProps {
  courseId: string;
  initialData: CourseValues;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required'
  })
});

const TitleForm = ({ courseId, initialData }: TitleFormProps) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = React.useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
  });

  const { register } = form;
  const { isSubmitting, isValid, errors } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
      toast.success('Course created');
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course title
        <Button onClick={toggleEdit} variation="link" size="small">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit title
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p className="text-sm mt-2">{initialData.title}</p>}
      {isEditing && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Flex direction="column" gap="small">
            <Input
              backgroundColor="white"
              id="title"
              hasError={!!errors.title}
              disabled={isSubmitting}
              placeholder="e.g. 'Advanced web development'"
              {...register('title')}
            />
            {errors.title?.message && (
              <p className="text-sm text-red-800">{errors.title?.message}</p>
            )}
          </Flex>
          <div className="flex items-center gap-x-2">
            <Button disabled={!isValid} isLoading={isSubmitting} type="submit">
              Save
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TitleForm;
