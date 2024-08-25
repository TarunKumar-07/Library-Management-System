import React from "react";

const MovieMaster = () => {
  return (
    <div className="container mt-4">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Master list of Movies</th>
            <th>
              <a href="/">Home</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Serial No</th>
            <th>Name of Movie</th>
            <th>Author Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Cost</th>
            <th>Procurement Date</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="text-end">
        <button className="btn btn-primary">
          <a href="/report" className="text-white">
            Back
          </a>
        </button>
        <button className="btn btn-secondary">Log Out</button>
      </div>
    </div>
  );
};

export default MovieMaster;
