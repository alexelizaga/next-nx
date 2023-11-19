'use client';

import React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pencil } from 'lucide-react';
import { Button, Flex } from '@aws-amplify/ui-react';

import { CourseValues } from '@/amplify-lms/types/types';
import { cn } from '@/amplify-lms/lib/utils';
import Combobox from '@/amplify-lms/components/Combobox';

interface CategoryFormProps {
  initialData: CourseValues;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  options?: { label: string; id: string }[];
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

  const { setValue } = form;
  const { isSubmitting, isValid, errors } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toggleEdit();
    onSubmitForm(values);
  };

  const selectedOption = React.useMemo(() => {
    return options?.find((option) => option.id === initialData.categoryId);
  }, [initialData.categoryId, options]);

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
            !initialData.categoryId && 'text-slate-500 italic'
          )}
        >
          {selectedOption?.label ?? 'No category'}
        </p>
      )}
      {isEditing && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Flex direction="column" gap="small">
            <Combobox
              options={options}
              onChange={(value) => {
                setValue('categoryId', value, {
                  shouldValidate: true,
                  shouldTouch: true
                });
              }}
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
