import { NavLink, Outlet } from "react-router-dom";

const Learn = () => (
  <div className="container mx-auto my-16 text-center">
    <h1 className="text-3xl text-center font-bold">Courses Page</h1>
    <p className="text-center mt-3 text-lg">
      Find all courses here and select which you want to take
    </p>
    <div className="mt-10">
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "",
            borderBottom: isActive ? "2px solid red" : "",
          };
        }}
        className="mx-10 border py-3 px-6 shadow-lg"
        to="/learn/courses"
      >
        Courses
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "",
            borderBottom: isActive ? "2px solid red" : "",
          };
        }}
        className="mx-10 border py-3 px-6 shadow-lg"
        to="/learn/bundles"
      >
        Bundles
      </NavLink>
    </div>

    <div className="mt-10">
      <Outlet />
    </div>
  </div>
);

export default Learn;
