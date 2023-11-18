'use client';

import React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pencil } from 'lucide-react';
import { Button, Flex, TextAreaField } from '@aws-amplify/ui-react';

import { CourseValues } from '@/amplify-lms/types/types';
import { cn } from '@/amplify-lms/lib/utils';

interface CategoryFormProps {
  initialData: CourseValues;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  options?: { label: string; value: string }[];
}

const formSchema = z.object({
  categoryId: z.string().min(1)
});

const CategoryForm = ({
  initialData,
  options,
  onSubmit: onSubmitForm
}: CategoryFormProps) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryId: initialData?.categoryId ?? ''
    }
  });

  const { register } = form;
  const { isSubmitting, isValid, errors } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toggleEdit();
    onSubmitForm(values);
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Category
        <Button onClick={toggleEdit} variation="link" size="small">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            'text-sm mt-2',
            !initialData.description && 'text-slate-500 italic'
          )}
        >
          {initialData.description ?? 'No description'}
        </p>
      )}
      {isEditing && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Flex direction="column" gap="small">
            <TextAreaField
              label=""
              backgroundColor="white"
              id="description"
              hasError={!!errors.categoryId}
              disabled={isSubmitting}
              placeholder="e.g. 'This course is about...'"
              {...register('categoryId')}
            />
            {errors.categoryId?.message && (
              <p className="text-sm text-red-800">
                {errors.categoryId?.message}
              </p>
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

export default CategoryForm;
