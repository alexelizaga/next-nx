'use client';

import toast from 'react-hot-toast';

import { ourFileRouter } from '@/app/api/uploadthing/core';
import { UploadButton, UploadDropzone } from '@/lib/uploadthing';

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
  dropzone?: boolean;
}

export const FileUpload = ({
  onChange,
  endpoint,
  dropzone = true
}: FileUploadProps) => {
  return (
    <>
      {!dropzone && (
        <UploadButton
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
          }}
          onUploadError={(error: Error) => {
            toast.error(`${error?.message}`);
          }}
        />
      )}
      {dropzone && (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
          }}
          onUploadError={(error: Error) => {
            console.log({ error });
            toast.error(`${error?.message}`);
          }}
        />
      )}
    </>
  );
};
