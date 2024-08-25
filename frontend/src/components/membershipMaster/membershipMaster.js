import React, { useState, useEffect } from "react";

const MembershipMaster = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/member");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("error while fetchinf members:", error.message);
      }
    };
    fetchMembers();
  },[]);

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
          {members.map((member) => (
            <tr>
              <td>{member._id}</td>
              <td>{member.fName}</td>
              <td>{member.lName}</td>
              <td>{member.contactNo}</td>
              <td>{member.addhar}</td>
              <td>{member.sDate}</td>
              <td>{member.eDate}</td>
              <td>{member.membership}</td>
            </tr>
          ))}
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

export default MembershipMaster;
