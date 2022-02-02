import { Outlet, NavLink } from "react-router-dom";

const Courses = () => {
  const courses = ["React", "Vue", "Angular", "Laravel", "Svelt"];
  const randomCourse = courses[Math.floor(Math.random() * courses.length)];
  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold">Couses Page</h1>
      <p>List of courses will show here...</p>
      <div className="mt-10">
        <p>Using NavLink component from v6</p>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "pink" : "",
              borderBottom: isActive ? "2px solid red" : "",
            };
          }}
          className="text-cyan-600 text-2xl mx-5"
          to={`/learn/courses/${randomCourse}`}
        >
          {randomCourse}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "pink" : "",
              borderBottom: isActive ? "2px solid red" : "",
            };
          }}
          className="text-cyan-600 text-2xl mx-5"
          to={`/learn/courses/clickme`}
        >
          Click Me
        </NavLink>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Courses;
