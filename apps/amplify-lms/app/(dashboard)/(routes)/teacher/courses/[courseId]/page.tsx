import React from 'react';

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  // const variables: ListCoursesQueryVariables = {
  //   limit: 1,
  //   filter: {
  //     and: [{ id: { eq: params.courseId } }]
  //   }
  // };

  // const { data } = await API.graphql<GraphQLQuery<ListCoursesQuery>>({
  //   query: queries.listCourses,
  //   variables
  // });

  // if (!data?.listCourses?.items.length) {
  //   return redirect('/');
  // }

  // return <div>ID: {data?.listCourses?.items[0]?.id}</div>;
  return (
    <>
      <div>Hola mundo</div>
      <p>Id: {params.courseId}</p>
    </>
  );
};

export default CourseIdPage;
