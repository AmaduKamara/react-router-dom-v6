import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseid } = useParams();
  return (
    <div>
      <h3>Course detail display here - URL: {courseid}</h3>
    </div>
  );
};

export default CourseDetails;
