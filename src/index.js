import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Learn from "./pages/Learn";
import Courses from "./components/Courses";
import Bundles from "./components/Bundles";
import CourseDetails from "./components/CourseDetails";
import CoursePriceDetails from "./components/CoursePriceDetails";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseDetails />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/course-price-details" element={<CoursePriceDetails />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
