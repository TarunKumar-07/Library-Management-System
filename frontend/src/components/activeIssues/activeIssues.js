import React from "react";

const ActiveIssues = () => {
  return (
    <div className="container mt-4">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Active Issues</th>
            <th>
              {/* <a href="/">Home</a> */}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Serial No Book/Movie</th>
            <th>Name of Book/Movie</th>
            <th>Membership Id</th>
            <th>Date of Issue</th>
            <th>Date of return</th>
          </tr>
          <tr>
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
          <a href="/report" className="text-white text-decoration-none">
            Back
          </a>
        </button>
        <button className="btn btn-secondary">
          <a href="/" className="text-white text-decoration-none">
            Log Out
          </a>
        </button>
      </div>
    </div>
  );
};

export default ActiveIssues;
