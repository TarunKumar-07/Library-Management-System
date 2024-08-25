import React from "react";

const Maintanence = () => {
  return (
    <div>
      <div className="container mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Housekeeping</th>
              <th>
                <a href="/">Back</a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Membership</td>
              <td>
                <a href="/addMember">Add</a>
              </td>
              <td>
                <a href="/updateMember">Update</a>
              </td>
            </tr>
            <tr>
              <td>Books/Movies</td>
              <td>
                <a href="/addBook">Add</a>
              </td>
              <td>
                <a href="/updateBook">Update</a>
              </td>
            </tr>
            <tr>
              <td>User Management</td>
              <td>
                <a href="/addUser">Add</a>
              </td>
              <td>
                <a href="/updateUser">Update</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-end">
          <button className="btn btn-secondary">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Maintanence;
