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

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="learn" element={<Learn />}>
        <Route path="courses" element={<Courses />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
