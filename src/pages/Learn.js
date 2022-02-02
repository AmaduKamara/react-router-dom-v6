import { Link } from "react-router-dom";

const Learn = () => (
  <div className="container mx-auto my-16 text-center">
    <h1 className="text-3xl text-center font-bold">Courses Page</h1>
    <p className="text-center mt-3 text-lg">
      Find all courses here and select which you want to take
    </p>
    <div className="mt-10">
      <Link className="mx-10 border py-3 px-6 shadow-lg" to="learn/courses">
        Courses
      </Link>
      <Link className="mx-10 border py-3 px-6 shadow-lg" to="learn/bundles">
        Courses
      </Link>
    </div>
  </div>
);

export default Learn;
