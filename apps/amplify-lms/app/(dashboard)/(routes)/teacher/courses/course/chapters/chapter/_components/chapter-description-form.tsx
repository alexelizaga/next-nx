'use client';

import React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pencil } from 'lucide-react';
import { Button, Flex } from '@aws-amplify/ui-react';

import { ChapterValues } from '@/amplify-lms/types/types';
import { cn } from '@/amplify-lms/lib/utils';
import { Editor } from '@/amplify-lms/components/Editor';
import { Preview } from '@/amplify-lms/components/Preview';

interface ChapterDescriptionFormProps {
  initialData: ChapterValues;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

const formSchema = z.object({
  description: z.string().min(1, {
    message: 'Description is required'
  })
});

const ChapterDescriptionForm = ({
  initialData,
  onSubmit: onSubmitForm
}: ChapterDescriptionFormProps) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: initialData?.description ?? ''
    }
  });

  const { setValue, getValues } = form;
  const { isSubmitting, isValid, errors } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toggleEdit();
    onSubmitForm(values);
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Description
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
        <div
          className={cn(
            'text-sm mt-2',
            !initialData.description && 'text-slate-500 italic'
          )}
        >
          {!initialData.description && 'No description'}
          {initialData.description && (
            <Preview value={initialData.description} />
          )}
        </div>
      )}
      {isEditing && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Flex direction="column" gap="small">
            <Editor
              value={getValues('description')}
              onChange={(value) => {
                setValue('description', value, {
                  shouldValidate: true,
                  shouldTouch: true
                });
              }}
            />
            {errors.description?.message && (
              <p className="text-sm text-red-800">
                {errors.description?.message}
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

export default ChapterDescriptionForm;
