import React from "react";

const UserHome = () => {
  return (
    <div>
      <div>
        <div className="container mt-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>
                  <a href="/report">Reports</a>
                </th>
                <th>
                  <a href="/transaction">Transactions</a>
                </th>
              </tr>
              <tr>
                <th>Code No From</th>
                <th>Code No To</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SC(B/M)000001</td>
                <td>SC(B/M)000004</td>
                <td>Science</td>
              </tr>
              <tr>
                <td>EC(B/M)000001</td>
                <td>EC(B/M)000004</td>
                <td>Economics</td>
              </tr>
              <tr>
                <td>FC(B/M)000001</td>
                <td>FC(B/M)000004</td>
                <td>Fiction</td>
              </tr>
              <tr>
                <td>CH(B/M)000001</td>
                <td>CH(B/M)000004</td>
                <td>Children</td>
              </tr>
              <tr>
                <td>PD(B/M)000001</td>
                <td>PD(B/M)000004</td>
                <td>Personal Development</td>
              </tr>
            </tbody>
          </table>
          <div className="text-end">
            <button className="btn btn-secondary">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
