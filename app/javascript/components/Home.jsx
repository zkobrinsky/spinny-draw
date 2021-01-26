import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Welcome to Home.jsx</h1>
        <p className="lead">
          Serving up React from Rails is cool.
        </p>
        <hr className="my-4" />
        <Link
          to="/things"
          className="btn btn-lg custom-button"
          role="button"
        >
          View the things
        </Link>
      </div>
    </div>
  </div>
);
