'use client';

import React from 'react';
import * as z from 'zod';
import { ImageIcon, Pencil, PlusCircle } from 'lucide-react';
import { Button } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';

import { CourseValues } from '@/amplify-lms/types/types';
import FileUpload from '@/amplify-lms/components/FileUpload';
import { removeFile } from '@/amplify-lms/lib/removeFile';

interface ImageFormProps {
  initialData: CourseValues;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: 'Image is required'
  })
});

const ImageForm = ({ initialData, onSubmit: onSubmitForm }: ImageFormProps) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const removeLastFile = () => {
    if (!initialData.imageUrl) return;
    removeFile(initialData.imageUrl);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toggleEdit();
    onSubmitForm(values);
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course image
        <Button onClick={toggleEdit} variation="link" size="small">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an image
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.imageUrl ? (
          <div className="flex items-center justify-center  bg-slate-200 rounded-md relative aspect-video mt-2">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2 overflow-hidden">
            <StorageImage
              width="100%"
              accessLevel="private"
              alt="upload"
              imgKey={initialData.imageUrl}
              className="object-cover rounded-md"
            ></StorageImage>
          </div>
        ))}
      {isEditing && (
        <div className="relative aspect-video mt-2">
          <FileUpload
            onStart={removeLastFile}
            fileType={'image'}
            accessLevel={'private'}
            onSuccess={onSubmit}
          />
          <div className="text-xs text-slate-500 mt-4">
            16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageForm;
