import { Category, Course, Genre } from '@/amplify-lms/API';

export type TableValues = Pick<Genre, 'name' | 'value' | 'createdAt'>;

export type CourseValues = Pick<
  Course,
  | 'id'
  | 'title'
  | 'description'
  | 'image'
  | 'price'
  | 'categoryId'
  | 'createdAt'
  | 'updatedAt'
>;

export type CategoryValues = Pick<Category, 'id' | 'icon' | 'name'>;
