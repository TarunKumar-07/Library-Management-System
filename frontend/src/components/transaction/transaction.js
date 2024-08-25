import React from "react";

const Transaction = () => {
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
              <a href="/isBookAvailable">Is Book Available?</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/issueBook">Issue Book?</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/returnBook">Return Book</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/payFine">Pay Fine</a>
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

export default Transaction;
