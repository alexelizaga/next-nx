import { Category, Chapter, Course } from '@/amplify-lms/API';

export type CourseValues = Pick<
  Course,
  | 'id'
  | 'title'
  | 'description'
  | 'image'
  | 'price'
  | 'categoryId'
  | 'Chapters'
  | 'isPublished'
  | 'createdAt'
  | 'updatedAt'
>;

export type CategoryValues = Pick<Category, 'id' | 'icon' | 'name'>;

export type ChapterValues = Pick<
  Chapter,
  | 'id'
  | 'title'
  | 'description'
  | 'video'
  | 'videoUrl'
  | 'videoProvider'
  | 'isPublished'
  | 'isFree'
>;
