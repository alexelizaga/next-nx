import { Genre } from '@/amplify-lms/API';

export type TableValues = Pick<Genre, 'name' | 'value' | 'createdAt'>;
