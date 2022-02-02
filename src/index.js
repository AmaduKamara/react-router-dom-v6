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

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="myapps" element={<Navigate replace to="/learn" />} />
      <Route path="learn" element={<Learn />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
