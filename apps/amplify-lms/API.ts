/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChapterInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  video?: string | null,
  videoUrl?: string | null,
  videoProvider?: string | null,
  position: number,
  isPublished: boolean,
  isFree: boolean,
  courseId: string,
};

export type ModelChapterConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  video?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  videoProvider?: ModelStringInput | null,
  position?: ModelIntInput | null,
  isPublished?: ModelBooleanInput | null,
  isFree?: ModelBooleanInput | null,
  courseId?: ModelIDInput | null,
  and?: Array< ModelChapterConditionInput | null > | null,
  or?: Array< ModelChapterConditionInput | null > | null,
  not?: ModelChapterConditionInput | null,
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

export type ModelIntInput = {
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

export type Chapter = {
  __typename: "Chapter",
  id: string,
  title: string,
  description?: string | null,
  video?: string | null,
  videoUrl?: string | null,
  videoProvider?: string | null,
  position: number,
  isPublished: boolean,
  isFree: boolean,
  courseId: string,
  Course?: Course | null,
  createdAt: string,
  updatedAt: string,
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
  Chapters?: ModelChapterConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Category = {
  __typename: "Category",
  id: string,
  icon?: string | null,
  name: string,
  Courses?: ModelCourseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelChapterConnection = {
  __typename: "ModelChapterConnection",
  items:  Array<Chapter | null >,
  nextToken?: string | null,
};

export type UpdateChapterInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  video?: string | null,
  videoUrl?: string | null,
  videoProvider?: string | null,
  position?: number | null,
  isPublished?: boolean | null,
  isFree?: boolean | null,
  courseId?: string | null,
};

export type DeleteChapterInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  icon?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  icon?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
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

export type ModelChapterFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  video?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  videoProvider?: ModelStringInput | null,
  position?: ModelIntInput | null,
  isPublished?: ModelBooleanInput | null,
  isFree?: ModelBooleanInput | null,
  courseId?: ModelIDInput | null,
  and?: Array< ModelChapterFilterInput | null > | null,
  or?: Array< ModelChapterFilterInput | null > | null,
  not?: ModelChapterFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type ModelSubscriptionChapterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  video?: ModelSubscriptionStringInput | null,
  videoUrl?: ModelSubscriptionStringInput | null,
  videoProvider?: ModelSubscriptionStringInput | null,
  position?: ModelSubscriptionIntInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  isFree?: ModelSubscriptionBooleanInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChapterFilterInput | null > | null,
  or?: Array< ModelSubscriptionChapterFilterInput | null > | null,
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

export type ModelSubscriptionIntInput = {
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

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  icon?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
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

export type CreateChapterMutationVariables = {
  input: CreateChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type CreateChapterMutation = {
  createChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    description?: string | null,
    video?: string | null,
    videoUrl?: string | null,
    videoProvider?: string | null,
    position: number,
    isPublished: boolean,
    isFree: boolean,
    courseId: string,
    Course?:  {
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChapterMutationVariables = {
  input: UpdateChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type UpdateChapterMutation = {
  updateChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    description?: string | null,
    video?: string | null,
    videoUrl?: string | null,
    videoProvider?: string | null,
    position: number,
    isPublished: boolean,
    isFree: boolean,
    courseId: string,
    Course?:  {
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChapterMutationVariables = {
  input: DeleteChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type DeleteChapterMutation = {
  deleteChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    description?: string | null,
    video?: string | null,
    videoUrl?: string | null,
    videoProvider?: string | null,
    position: number,
    isPublished: boolean,
    isFree: boolean,
    courseId: string,
    Course?:  {
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    name: string,
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
    name: string,
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
    name: string,
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
      name: string,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        title: string,
        description?: string | null,
        video?: string | null,
        videoUrl?: string | null,
        videoProvider?: string | null,
        position: number,
        isPublished: boolean,
        isFree: boolean,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
      name: string,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        title: string,
        description?: string | null,
        video?: string | null,
        videoUrl?: string | null,
        videoProvider?: string | null,
        position: number,
        isPublished: boolean,
        isFree: boolean,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
      name: string,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        title: string,
        description?: string | null,
        video?: string | null,
        videoUrl?: string | null,
        videoProvider?: string | null,
        position: number,
        isPublished: boolean,
        isFree: boolean,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetChapterQueryVariables = {
  id: string,
};

export type GetChapterQuery = {
  getChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    description?: string | null,
    video?: string | null,
    videoUrl?: string | null,
    videoProvider?: string | null,
    position: number,
    isPublished: boolean,
    isFree: boolean,
    courseId: string,
    Course?:  {
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChaptersQueryVariables = {
  filter?: ModelChapterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChaptersQuery = {
  listChapters?:  {
    __typename: "ModelChapterConnection",
    items:  Array< {
      __typename: "Chapter",
      id: string,
      title: string,
      description?: string | null,
      video?: string | null,
      videoUrl?: string | null,
      videoProvider?: string | null,
      position: number,
      isPublished: boolean,
      isFree: boolean,
      courseId: string,
      Course?:  {
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
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChaptersByCourseIdQueryVariables = {
  courseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChapterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChaptersByCourseIdQuery = {
  chaptersByCourseId?:  {
    __typename: "ModelChapterConnection",
    items:  Array< {
      __typename: "Chapter",
      id: string,
      title: string,
      description?: string | null,
      video?: string | null,
      videoUrl?: string | null,
      videoProvider?: string | null,
      position: number,
      isPublished: boolean,
      isFree: boolean,
      courseId: string,
      Course?:  {
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
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    name: string,
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
      name: string,
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
      name: string,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        title: string,
        description?: string | null,
        video?: string | null,
        videoUrl?: string | null,
        videoProvider?: string | null,
        position: number,
        isPublished: boolean,
        isFree: boolean,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnCreateChapterSubscription = {
  onCreateChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    description?: string | null,
    video?: string | null,
    videoUrl?: string | null,
    videoProvider?: string | null,
    position: number,
    isPublished: boolean,
    isFree: boolean,
    courseId: string,
    Course?:  {
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnUpdateChapterSubscription = {
  onUpdateChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    description?: string | null,
    video?: string | null,
    videoUrl?: string | null,
    videoProvider?: string | null,
    position: number,
    isPublished: boolean,
    isFree: boolean,
    courseId: string,
    Course?:  {
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnDeleteChapterSubscription = {
  onDeleteChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    description?: string | null,
    video?: string | null,
    videoUrl?: string | null,
    videoProvider?: string | null,
    position: number,
    isPublished: boolean,
    isFree: boolean,
    courseId: string,
    Course?:  {
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
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Chapters?:  {
        __typename: "ModelChapterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
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
    name: string,
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
    name: string,
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
      name: string,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        title: string,
        description?: string | null,
        video?: string | null,
        videoUrl?: string | null,
        videoProvider?: string | null,
        position: number,
        isPublished: boolean,
        isFree: boolean,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
      name: string,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        title: string,
        description?: string | null,
        video?: string | null,
        videoUrl?: string | null,
        videoProvider?: string | null,
        position: number,
        isPublished: boolean,
        isFree: boolean,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
      name: string,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        title: string,
        description?: string | null,
        video?: string | null,
        videoUrl?: string | null,
        videoProvider?: string | null,
        position: number,
        isPublished: boolean,
        isFree: boolean,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
