/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateChapter = /* GraphQL */ `subscription OnCreateChapter($filter: ModelSubscriptionChapterFilterInput) {
  onCreateChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChapterSubscriptionVariables,
  APITypes.OnCreateChapterSubscription
>;
export const onUpdateChapter = /* GraphQL */ `subscription OnUpdateChapter($filter: ModelSubscriptionChapterFilterInput) {
  onUpdateChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSubscriptionVariables,
  APITypes.OnUpdateChapterSubscription
>;
export const onDeleteChapter = /* GraphQL */ `subscription OnDeleteChapter($filter: ModelSubscriptionChapterFilterInput) {
  onDeleteChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSubscriptionVariables,
  APITypes.OnDeleteChapterSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
