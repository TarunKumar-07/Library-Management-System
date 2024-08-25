import React from "react";

const IssueRequest = () => {
  return (
    <div className="container mt-4">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Issue Request</th>
            <th>
              <a href="/">Home</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Membership Id</th>
            <th>Name of Book/Movie</th>
            <th>Requested Date</th>
            <th>Reques Fullfill Date</th>
          </tr>
          <tr>
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

export default IssueRequest;
