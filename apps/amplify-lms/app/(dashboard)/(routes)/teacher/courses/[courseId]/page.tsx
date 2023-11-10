const CourseId = ({ params }: { params: { courseId: string } }) => {
  return <div>id: {params.courseId}</div>;
};

export default CourseId;
