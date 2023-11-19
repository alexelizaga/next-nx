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
import { Course } from '../../API.js';
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
export declare type ChapterCreateFormInputValues = {
  title?: string;
  description?: string;
  video?: string;
  videoUrl?: string;
  videoProvider?: string;
  position?: number;
  isPublished?: boolean;
  isFree?: boolean;
  Course?: Course;
};
export declare type ChapterCreateFormValidationValues = {
  title?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
  video?: ValidationFunction<string>;
  videoUrl?: ValidationFunction<string>;
  videoProvider?: ValidationFunction<string>;
  position?: ValidationFunction<number>;
  isPublished?: ValidationFunction<boolean>;
  isFree?: ValidationFunction<boolean>;
  Course?: ValidationFunction<Course>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ChapterCreateFormOverridesProps = {
  ChapterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
  video?: PrimitiveOverrideProps<TextFieldProps>;
  videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
  videoProvider?: PrimitiveOverrideProps<TextFieldProps>;
  position?: PrimitiveOverrideProps<TextFieldProps>;
  isPublished?: PrimitiveOverrideProps<SwitchFieldProps>;
  isFree?: PrimitiveOverrideProps<SwitchFieldProps>;
  Course?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ChapterCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ChapterCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: ChapterCreateFormInputValues
    ) => ChapterCreateFormInputValues;
    onSuccess?: (fields: ChapterCreateFormInputValues) => void;
    onError?: (
      fields: ChapterCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: ChapterCreateFormInputValues
    ) => ChapterCreateFormInputValues;
    onValidate?: ChapterCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function ChapterCreateForm(
  props: ChapterCreateFormProps
): React.ReactElement;
