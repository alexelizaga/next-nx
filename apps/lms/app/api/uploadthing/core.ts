import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { auth } from '@clerk/nextjs';

const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  if (!userId) throw new Error('Unauthorized');
  return { userId };
};

export const uploadRouter = {
  courseImage: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ file }) => console.log('file', file)),
  courseAttachment: f(['text', 'image', 'audio', 'pdf'])
    .middleware(() => handleAuth())
    .onUploadComplete(({ file }) => console.log('file', file)),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: '1GB' } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ file }) => console.log('file', file)),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
