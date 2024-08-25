import React from "react";

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-5">Library Management System</h1>
      <div className="d-flex flex-row align-items-center gap-3">
        <button
          className="btn btn-primary btn-lg"
          style={{ backgroundColor: "blue" }}
        >
          <a href="/user" style={{ color: "white", textDecoration: "none" }}>
            User Login
          </a>
        </button>
        <button
          className="btn btn-danger btn-lg"
          style={{ backgroundColor: "red" }}
        >
          <a href="/admin" style={{ color: "white", textDecoration: "none" }}>
            Admin Login
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
