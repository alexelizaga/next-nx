/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  icon?: string | null,
  name?: string | null,
};

export type ModelCategoryConditionInput = {
  icon?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  icon?: string | null,
  name?: string | null,
  Courses?: ModelCourseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  title: string,
  description?: string | null,
  image?: string | null,
  price?: number | null,
  isPublished?: boolean | null,
  categoryId?: string | null,
  Category?: Category | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  icon?: string | null,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  image?: string | null,
  price?: number | null,
  isPublished?: boolean | null,
  categoryId?: string | null,
};

export type ModelCourseConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  isPublished?: ModelBooleanInput | null,
  categoryId?: ModelIDInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCourseInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  price?: number | null,
  isPublished?: boolean | null,
  categoryId?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreatePlatformInput = {
  id?: string | null,
  name?: string | null,
  value?: string | null,
};

export type ModelPlatformConditionInput = {
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelPlatformConditionInput | null > | null,
  or?: Array< ModelPlatformConditionInput | null > | null,
  not?: ModelPlatformConditionInput | null,
};

export type Platform = {
  __typename: "Platform",
  id: string,
  name?: string | null,
  value?: string | null,
  Products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name?: string | null,
  isSold?: boolean | null,
  price?: number | null,
  image?: string | null,
  platformID: string,
  genreID: string,
  Platform?: Platform | null,
  Genre?: Genre | null,
  createdAt: string,
  updatedAt: string,
};

export type Genre = {
  __typename: "Genre",
  id: string,
  name?: string | null,
  value?: string | null,
  Products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlatformInput = {
  id: string,
  name?: string | null,
  value?: string | null,
};

export type DeletePlatformInput = {
  id: string,
};

export type CreateGenreInput = {
  id?: string | null,
  name?: string | null,
  value?: string | null,
};

export type ModelGenreConditionInput = {
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelGenreConditionInput | null > | null,
  or?: Array< ModelGenreConditionInput | null > | null,
  not?: ModelGenreConditionInput | null,
};

export type UpdateGenreInput = {
  id: string,
  name?: string | null,
  value?: string | null,
};

export type DeleteGenreInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name?: string | null,
  isSold?: boolean | null,
  price?: number | null,
  image?: string | null,
  platformID: string,
  genreID: string,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  isSold?: ModelBooleanInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  platformID?: ModelIDInput | null,
  genreID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  isSold?: boolean | null,
  price?: number | null,
  image?: string | null,
  platformID?: string | null,
  genreID?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  icon?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  isPublished?: ModelBooleanInput | null,
  categoryId?: ModelIDInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPlatformFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelPlatformFilterInput | null > | null,
  or?: Array< ModelPlatformFilterInput | null > | null,
  not?: ModelPlatformFilterInput | null,
};

export type ModelPlatformConnection = {
  __typename: "ModelPlatformConnection",
  items:  Array<Platform | null >,
  nextToken?: string | null,
};

export type ModelGenreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelGenreFilterInput | null > | null,
  or?: Array< ModelGenreFilterInput | null > | null,
  not?: ModelGenreFilterInput | null,
};

export type ModelGenreConnection = {
  __typename: "ModelGenreConnection",
  items:  Array<Genre | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  isSold?: ModelBooleanInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  platformID?: ModelIDInput | null,
  genreID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  icon?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionPlatformFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlatformFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlatformFilterInput | null > | null,
};

export type ModelSubscriptionGenreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGenreFilterInput | null > | null,
  or?: Array< ModelSubscriptionGenreFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  isSold?: ModelSubscriptionBooleanInput | null,
  price?: ModelSubscriptionFloatInput | null,
  image?: ModelSubscriptionStringInput | null,
  platformID?: ModelSubscriptionIDInput | null,
  genreID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    icon?: string | null,
    name?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        title: string,
        description?: string | null,
        image?: string | null,
        price?: number | null,
        isPublished?: boolean | null,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    icon?: string | null,
    name?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        title: string,
        description?: string | null,
        image?: string | null,
        price?: number | null,
        isPublished?: boolean | null,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    icon?: string | null,
    name?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        title: string,
        description?: string | null,
        image?: string | null,
        price?: number | null,
        isPublished?: boolean | null,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    isPublished?: boolean | null,
    categoryId?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      icon?: string | null,
      name?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    isPublished?: boolean | null,
    categoryId?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      icon?: string | null,
      name?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    isPublished?: boolean | null,
    categoryId?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      icon?: string | null,
      name?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlatformMutationVariables = {
  input: CreatePlatformInput,
  condition?: ModelPlatformConditionInput | null,
};

export type CreatePlatformMutation = {
  createPlatform?:  {
    __typename: "Platform",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlatformMutationVariables = {
  input: UpdatePlatformInput,
  condition?: ModelPlatformConditionInput | null,
};

export type UpdatePlatformMutation = {
  updatePlatform?:  {
    __typename: "Platform",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlatformMutationVariables = {
  input: DeletePlatformInput,
  condition?: ModelPlatformConditionInput | null,
};

export type DeletePlatformMutation = {
  deletePlatform?:  {
    __typename: "Platform",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGenreMutationVariables = {
  input: CreateGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type CreateGenreMutation = {
  createGenre?:  {
    __typename: "Genre",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGenreMutationVariables = {
  input: UpdateGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type UpdateGenreMutation = {
  updateGenre?:  {
    __typename: "Genre",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGenreMutationVariables = {
  input: DeleteGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type DeleteGenreMutation = {
  deleteGenre?:  {
    __typename: "Genre",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    isSold?: boolean | null,
    price?: number | null,
    image?: string | null,
    platformID: string,
    genreID: string,
    Platform?:  {
      __typename: "Platform",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Genre?:  {
      __typename: "Genre",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    isSold?: boolean | null,
    price?: number | null,
    image?: string | null,
    platformID: string,
    genreID: string,
    Platform?:  {
      __typename: "Platform",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Genre?:  {
      __typename: "Genre",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    isSold?: boolean | null,
    price?: number | null,
    image?: string | null,
    platformID: string,
    genreID: string,
    Platform?:  {
      __typename: "Platform",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Genre?:  {
      __typename: "Genre",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    icon?: string | null,
    name?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        title: string,
        description?: string | null,
        image?: string | null,
        price?: number | null,
        isPublished?: boolean | null,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      icon?: string | null,
      name?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    isPublished?: boolean | null,
    categoryId?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      icon?: string | null,
      name?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      image?: string | null,
      price?: number | null,
      isPublished?: boolean | null,
      categoryId?: string | null,
      Category?:  {
        __typename: "Category",
        id: string,
        icon?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoursesByCategoryIdQueryVariables = {
  categoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoursesByCategoryIdQuery = {
  coursesByCategoryId?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      title: string,
      description?: string | null,
      image?: string | null,
      price?: number | null,
      isPublished?: boolean | null,
      categoryId?: string | null,
      Category?:  {
        __typename: "Category",
        id: string,
        icon?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlatformQueryVariables = {
  id: string,
};

export type GetPlatformQuery = {
  getPlatform?:  {
    __typename: "Platform",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlatformsQueryVariables = {
  filter?: ModelPlatformFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlatformsQuery = {
  listPlatforms?:  {
    __typename: "ModelPlatformConnection",
    items:  Array< {
      __typename: "Platform",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGenreQueryVariables = {
  id: string,
};

export type GetGenreQuery = {
  getGenre?:  {
    __typename: "Genre",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGenresQueryVariables = {
  filter?: ModelGenreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGenresQuery = {
  listGenres?:  {
    __typename: "ModelGenreConnection",
    items:  Array< {
      __typename: "Genre",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    isSold?: boolean | null,
    price?: number | null,
    image?: string | null,
    platformID: string,
    genreID: string,
    Platform?:  {
      __typename: "Platform",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Genre?:  {
      __typename: "Genre",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      isSold?: boolean | null,
      price?: number | null,
      image?: string | null,
      platformID: string,
      genreID: string,
      Platform?:  {
        __typename: "Platform",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      Genre?:  {
        __typename: "Genre",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByPlatformIDQueryVariables = {
  platformID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByPlatformIDQuery = {
  productsByPlatformID?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      isSold?: boolean | null,
      price?: number | null,
      image?: string | null,
      platformID: string,
      genreID: string,
      Platform?:  {
        __typename: "Platform",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      Genre?:  {
        __typename: "Genre",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByGenreIDQueryVariables = {
  genreID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByGenreIDQuery = {
  productsByGenreID?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      isSold?: boolean | null,
      price?: number | null,
      image?: string | null,
      platformID: string,
      genreID: string,
      Platform?:  {
        __typename: "Platform",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      Genre?:  {
        __typename: "Genre",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    icon?: string | null,
    name?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        title: string,
        description?: string | null,
        image?: string | null,
        price?: number | null,
        isPublished?: boolean | null,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    icon?: string | null,
    name?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        title: string,
        description?: string | null,
        image?: string | null,
        price?: number | null,
        isPublished?: boolean | null,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    icon?: string | null,
    name?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        title: string,
        description?: string | null,
        image?: string | null,
        price?: number | null,
        isPublished?: boolean | null,
        categoryId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    isPublished?: boolean | null,
    categoryId?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      icon?: string | null,
      name?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    isPublished?: boolean | null,
    categoryId?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      icon?: string | null,
      name?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    isPublished?: boolean | null,
    categoryId?: string | null,
    Category?:  {
      __typename: "Category",
      id: string,
      icon?: string | null,
      name?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlatformSubscriptionVariables = {
  filter?: ModelSubscriptionPlatformFilterInput | null,
};

export type OnCreatePlatformSubscription = {
  onCreatePlatform?:  {
    __typename: "Platform",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlatformSubscriptionVariables = {
  filter?: ModelSubscriptionPlatformFilterInput | null,
};

export type OnUpdatePlatformSubscription = {
  onUpdatePlatform?:  {
    __typename: "Platform",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlatformSubscriptionVariables = {
  filter?: ModelSubscriptionPlatformFilterInput | null,
};

export type OnDeletePlatformSubscription = {
  onDeletePlatform?:  {
    __typename: "Platform",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGenreSubscriptionVariables = {
  filter?: ModelSubscriptionGenreFilterInput | null,
};

export type OnCreateGenreSubscription = {
  onCreateGenre?:  {
    __typename: "Genre",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGenreSubscriptionVariables = {
  filter?: ModelSubscriptionGenreFilterInput | null,
};

export type OnUpdateGenreSubscription = {
  onUpdateGenre?:  {
    __typename: "Genre",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGenreSubscriptionVariables = {
  filter?: ModelSubscriptionGenreFilterInput | null,
};

export type OnDeleteGenreSubscription = {
  onDeleteGenre?:  {
    __typename: "Genre",
    id: string,
    name?: string | null,
    value?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        isSold?: boolean | null,
        price?: number | null,
        image?: string | null,
        platformID: string,
        genreID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    isSold?: boolean | null,
    price?: number | null,
    image?: string | null,
    platformID: string,
    genreID: string,
    Platform?:  {
      __typename: "Platform",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Genre?:  {
      __typename: "Genre",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    isSold?: boolean | null,
    price?: number | null,
    image?: string | null,
    platformID: string,
    genreID: string,
    Platform?:  {
      __typename: "Platform",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Genre?:  {
      __typename: "Genre",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    isSold?: boolean | null,
    price?: number | null,
    image?: string | null,
    platformID: string,
    genreID: string,
    Platform?:  {
      __typename: "Platform",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Genre?:  {
      __typename: "Genre",
      id: string,
      name?: string | null,
      value?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
