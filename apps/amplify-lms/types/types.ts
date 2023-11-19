import { Category, Course } from '@/amplify-lms/API';

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
