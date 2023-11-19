'use client';

import React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PlusCircle } from 'lucide-react';
import { Button, Flex, Input } from '@aws-amplify/ui-react';

import { ChapterValues, CourseValues } from '@/amplify-lms/types/types';
import { cn } from '@/amplify-lms/lib/utils';

import ChaptersList from './chapters-list';
import toast from 'react-hot-toast';

interface ChaptersFormProps {
  initialData: CourseValues;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onReorder: (updateData: { id: string; position: number }[]) => void;
}

const formSchema = z.object({
  title: z.string().min(1)
});

const ChaptersForm = ({
  initialData,
  onSubmit: onSubmitChapter,
  onReorder: onReorderChapters
}: ChaptersFormProps) => {
  const [isCreating, setIsCreating] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);

  const toggleCreating = () => setIsCreating((current) => !current);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ''
    }
  });

  const { register } = form;
  const { isSubmitting, isValid, errors } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toggleCreating();
    onSubmitChapter(values);
  };

  const onReorder = async (updateData: { id: string; position: number }[]) => {
    try {
      setIsUpdating(true);
      onReorderChapters(updateData);
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapters
        <Button onClick={toggleCreating} variation="link" size="small">
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add
            </>
          )}
        </Button>
      </div>
      {isCreating && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Flex direction="column" gap="small">
            <Input
              backgroundColor="white"
              id="title"
              hasError={!!errors.title}
              disabled={isSubmitting}
              placeholder="e.g. 'Introduction to the course'"
              {...register('title')}
            />
            {errors.title?.message && (
              <p className="text-sm text-red-800">{errors.title?.message}</p>
            )}
          </Flex>

          <Button disabled={!isValid} isLoading={isSubmitting} type="submit">
            Create
          </Button>
        </form>
      )}
      {!isCreating && (
        <div
          className={cn(
            'text-sm mt-2',
            !initialData.Chapters?.items.length && 'text-slate-500 italic'
          )}
        >
          {!initialData.Chapters?.items.length && 'No chapters'}
          <ChaptersList
            onEdit={() => null}
            onReorder={onReorder}
            items={(initialData.Chapters?.items as ChapterValues[]) ?? []}
          />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-slate-500 mt-4">
          Drag and drop to reorder the chapters
        </p>
      )}
    </div>
  );
};

export default ChaptersForm;
