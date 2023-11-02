import { Genre } from '@/amplify-lms/src/API';

export type TableValues = Pick<Genre, 'name' | 'value' | 'createdAt'>;
