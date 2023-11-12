'use client';

import React from 'react';
import { FileUploader } from '@aws-amplify/ui-react';

type FileType = 'image' | 'video' | 'pdf';

interface FileUploadProps {
  variation?: 'drop' | 'button';
  fileType: FileType;
  accessLevel: 'public' | 'protected' | 'private';
  maxFileCount?: number;
  maxSize?: number;
  onSuccess: (values: { imageUrl: string }) => void;
}

const FileUpload = ({
  variation = 'button',
  fileType,
  accessLevel,
  maxFileCount = 1,
  maxSize = 1000000,
  onSuccess: onSuccessUpload
}: FileUploadProps) => {
  const [message, setMessage] = React.useState('');

  const acceptedFileTypes = React.useMemo(() => {
    switch (fileType) {
      case 'image':
        return ['image/*'];
      default:
        return [];
    }
  }, [fileType]);

  const onSuccess = ({ key }: Record<string, string>) => {
    onSuccessUpload({ imageUrl: key });
    setMessage(`Key: ${key}`);
  };

  const onError = (error: string) => {
    setMessage(`${error}`);
  };

  return (
    <>
      <FileUploader
        showImages={true}
        maxFileCount={maxFileCount}
        maxSize={maxSize}
        variation={variation}
        acceptedFileTypes={acceptedFileTypes}
        accessLevel={accessLevel}
        onSuccess={onSuccess}
        onError={onError}
      />
      {message}
    </>
  );
};

export default FileUpload;
