import React from "react";

const Report = () => {
  return (
    <div className="container mt-4">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Available Reports</th>
            <th>
              <a href="/">Home</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/bookMaster">Master List of Books</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/movieMaster">Master List of Movies</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/membershipMaster">Master List of Membership</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/activeIssues">Active Issues</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/overdueReturn">Overdue Returns</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/issueRequest">Issue Requests</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-end">
        <button className="btn btn-secondary">Log Out</button>
      </div>
    </div>
  );
};

export default Report;
