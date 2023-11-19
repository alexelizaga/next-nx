/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createChapter = /* GraphQL */ `mutation CreateChapter(
  $input: CreateChapterInput!
  $condition: ModelChapterConditionInput
) {
  createChapter(input: $input, condition: $condition) {
    id
    title
    description
    video
    videoUrl
    videoProvider
    position
    isPublished
    isFree
    courseId
    Course {
      id
      title
      description
      image
      price
      isPublished
      categoryId
      Category {
        id
        icon
        name
        createdAt
        updatedAt
        __typename
      }
      Chapters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChapterMutationVariables,
  APITypes.CreateChapterMutation
>;
export const updateChapter = /* GraphQL */ `mutation UpdateChapter(
  $input: UpdateChapterInput!
  $condition: ModelChapterConditionInput
) {
  updateChapter(input: $input, condition: $condition) {
    id
    title
    description
    video
    videoUrl
    videoProvider
    position
    isPublished
    isFree
    courseId
    Course {
      id
      title
      description
      image
      price
      isPublished
      categoryId
      Category {
        id
        icon
        name
        createdAt
        updatedAt
        __typename
      }
      Chapters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChapterMutationVariables,
  APITypes.UpdateChapterMutation
>;
export const deleteChapter = /* GraphQL */ `mutation DeleteChapter(
  $input: DeleteChapterInput!
  $condition: ModelChapterConditionInput
) {
  deleteChapter(input: $input, condition: $condition) {
    id
    title
    description
    video
    videoUrl
    videoProvider
    position
    isPublished
    isFree
    courseId
    Course {
      id
      title
      description
      image
      price
      isPublished
      categoryId
      Category {
        id
        icon
        name
        createdAt
        updatedAt
        __typename
      }
      Chapters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChapterMutationVariables,
  APITypes.DeleteChapterMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
    id
    icon
    name
    Courses {
      items {
        id
        title
        description
        image
        price
        isPublished
        categoryId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
    id
    icon
    name
    Courses {
      items {
        id
        title
        description
        image
        price
        isPublished
        categoryId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
    id
    icon
    name
    Courses {
      items {
        id
        title
        description
        image
        price
        isPublished
        categoryId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $input: CreateCourseInput!
  $condition: ModelCourseConditionInput
) {
  createCourse(input: $input, condition: $condition) {
    id
    title
    description
    image
    price
    isPublished
    categoryId
    Category {
      id
      icon
      name
      Courses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Chapters {
      items {
        id
        title
        description
        video
        videoUrl
        videoProvider
        position
        isPublished
        isFree
        courseId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $input: UpdateCourseInput!
  $condition: ModelCourseConditionInput
) {
  updateCourse(input: $input, condition: $condition) {
    id
    title
    description
    image
    price
    isPublished
    categoryId
    Category {
      id
      icon
      name
      Courses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Chapters {
      items {
        id
        title
        description
        video
        videoUrl
        videoProvider
        position
        isPublished
        isFree
        courseId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $input: DeleteCourseInput!
  $condition: ModelCourseConditionInput
) {
  deleteCourse(input: $input, condition: $condition) {
    id
    title
    description
    image
    price
    isPublished
    categoryId
    Category {
      id
      icon
      name
      Courses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Chapters {
      items {
        id
        title
        description
        video
        videoUrl
        videoProvider
        position
        isPublished
        isFree
        courseId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
