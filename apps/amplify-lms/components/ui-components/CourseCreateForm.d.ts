/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import {
  AutocompleteProps,
  GridProps,
  SwitchFieldProps,
  TextFieldProps,
} from '@aws-amplify/ui-react';
import { Category, Chapter } from '@/amplify-lms/API.js';
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourseCreateFormInputValues = {
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  isPublished?: boolean;
  Category?: Category;
  Chapters?: Chapter[];
};
export declare type CourseCreateFormValidationValues = {
  title?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
  image?: ValidationFunction<string>;
  price?: ValidationFunction<number>;
  isPublished?: ValidationFunction<boolean>;
  Category?: ValidationFunction<Category>;
  Chapters?: ValidationFunction<Chapter>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type CourseCreateFormOverridesProps = {
  CourseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
  image?: PrimitiveOverrideProps<TextFieldProps>;
  price?: PrimitiveOverrideProps<TextFieldProps>;
  isPublished?: PrimitiveOverrideProps<SwitchFieldProps>;
  Category?: PrimitiveOverrideProps<AutocompleteProps>;
  Chapters?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CourseCreateFormProps = React.PropsWithChildren<
  {
    overrides?: CourseCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: CourseCreateFormInputValues
    ) => CourseCreateFormInputValues;
    onSuccess?: (fields: CourseCreateFormInputValues) => void;
    onError?: (
      fields: CourseCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: CourseCreateFormInputValues
    ) => CourseCreateFormInputValues;
    onValidate?: CourseCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function CourseCreateForm(
  props: CourseCreateFormProps
): React.ReactElement;
