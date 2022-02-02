import { Outlet } from "react-router-dom";

const Courses = () => (
  <div className="text-center">
    <h1 className="text-xl font-semibold">Couses Page</h1>
    <p>List of courses will show here...</p>
    <div className="mt-10">
      <Outlet />
    </div>
  </div>
);

export default Courses;
