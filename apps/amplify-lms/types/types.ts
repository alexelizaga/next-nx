import { Course, Genre } from '@/amplify-lms/API';

export type TableValues = Pick<Genre, 'name' | 'value' | 'createdAt'>;

export type CourseValues = Pick<
  Course,
  'id' | 'title' | 'createdAt' | 'updatedAt'
>;
