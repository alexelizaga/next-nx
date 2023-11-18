'use client';

import React from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { ProcessFileParams } from '@aws-amplify/ui-react-storage/dist/types/components/StorageManager/types';

type FileType = 'image' | 'video' | 'pdf';

interface FileUploadProps {
  fileType: FileType;
  accessLevel: 'public' | 'protected' | 'private';
  maxFileCount?: number;
  maxSize?: number;
  onStart: (values: { image: string }) => void;
  onSuccess: (values: { image: string }) => void;
}

const FileUpload = ({
  fileType,
  accessLevel,
  maxFileCount = 1,
  maxSize = 1000000,
  onStart: onUploadStart,
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

  const onStart = ({ key }: Record<string, string>) => {
    onUploadStart({ image: key });
  };

  const onSuccess = ({ key }: Record<string, string>) => {
    onSuccessUpload({ image: key });
    setMessage(`Key: ${key}`);
  };

  const onError = (error: string) => {
    setMessage(`${error}`);
  };

  const processFile = async ({ file }: ProcessFileParams) => {
    const fileExtension = file.name.split('.').pop();

    return file
      .arrayBuffer()
      .then((filebuffer) => window.crypto.subtle.digest('SHA-1', filebuffer))
      .then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((a) => a.toString(16).padStart(2, '0'))
          .join('');
        return { file, key: `${hashHex}.${fileExtension}` };
      });
  };

  return (
    <>
      <StorageManager
        acceptedFileTypes={acceptedFileTypes}
        accessLevel={accessLevel}
        autoUpload={false}
        maxFileCount={maxFileCount}
        isResumable
        maxFileSize={maxSize}
        onUploadStart={onStart}
        processFile={processFile}
        onUploadSuccess={onSuccess}
        onUploadError={onError}
      />
      {message}
    </>
  );
};

export default FileUpload;
