import { useParams,  } from "react-router-dom";

const CourseDetails = () => {
  const { courseid } = useParams();
  return (
    <div>
      <h3>URL of a selected course: {courseid}</h3>
      <button className="py-3 px-6 border bg-teal-400 mt-5">
        View Course Price
      </button>
    </div>
  );
};

export default CourseDetails;
