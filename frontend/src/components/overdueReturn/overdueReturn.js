import React from "react";

const OverdueReturn = () => {
  return (
    <div className="container mt-4">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Overdue Returns</th>
            <th>
              <a href="/">Home</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Serial No Book</th>
            <th>Name of Book</th>
            <th>Membership Id</th>
            <th>Date of Issue</th>
            <th>Date of return</th>
            <th>Fine Calculation</th>
          </tr>
          <tr>
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

export default OverdueReturn;
