import React from "react";

const MembershipMaster = () => {
  return (
    <div className="container mt-4">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Master list of Membership</th>
            <th>
              <a href="/">Home</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Membership Id</th>
            <th>Name of Member</th>
            <th>Contact Number</th>
            <th>Contact Address</th>
            <th>Addhar Card no</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Amount Pending</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
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
          <a href="/report" className="text-white">Back</a>
        </button>
        <button className="btn btn-secondary">Log Out</button>
      </div>
    </div>
  );
};

export default MembershipMaster;
