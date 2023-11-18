/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import {
  AutocompleteProps,
  GridProps,
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
export declare type CategoryCreateFormInputValues = {
  icon?: string;
  name?: string;
  Courses?: Course[];
};
export declare type CategoryCreateFormValidationValues = {
  icon?: ValidationFunction<string>;
  name?: ValidationFunction<string>;
  Courses?: ValidationFunction<Course>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type CategoryCreateFormOverridesProps = {
  CategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  icon?: PrimitiveOverrideProps<TextFieldProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  Courses?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CategoryCreateFormProps = React.PropsWithChildren<
  {
    overrides?: CategoryCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: CategoryCreateFormInputValues
    ) => CategoryCreateFormInputValues;
    onSuccess?: (fields: CategoryCreateFormInputValues) => void;
    onError?: (
      fields: CategoryCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: CategoryCreateFormInputValues
    ) => CategoryCreateFormInputValues;
    onValidate?: CategoryCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function CategoryCreateForm(
  props: CategoryCreateFormProps
): React.ReactElement;
