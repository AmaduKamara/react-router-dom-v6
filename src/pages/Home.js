import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container mx-auto my-16 text-center">
    <h1 className="text-3xl text-center font-bold">Home Component</h1>.
    <div className="mt-16">
      <Link
        to="/learn"
        className="py-4 px-6 rounded-full border bg-cyan-500 text-white uppercase"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default Home;
