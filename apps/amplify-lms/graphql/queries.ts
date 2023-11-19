/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getChapter = /* GraphQL */ `query GetChapter($id: ID!) {
  getChapter(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChapterQueryVariables,
  APITypes.GetChapterQuery
>;
export const listChapters = /* GraphQL */ `query ListChapters(
  $filter: ModelChapterFilterInput
  $limit: Int
  $nextToken: String
) {
  listChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      Course {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChaptersQueryVariables,
  APITypes.ListChaptersQuery
>;
export const chaptersByCourseId = /* GraphQL */ `query ChaptersByCourseId(
  $courseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChapterFilterInput
  $limit: Int
  $nextToken: String
) {
  chaptersByCourseId(
    courseId: $courseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      Course {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChaptersByCourseIdQueryVariables,
  APITypes.ChaptersByCourseIdQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const coursesByCategoryId = /* GraphQL */ `query CoursesByCategoryId(
  $categoryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  coursesByCategoryId(
    categoryId: $categoryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoursesByCategoryIdQueryVariables,
  APITypes.CoursesByCategoryIdQuery
>;
