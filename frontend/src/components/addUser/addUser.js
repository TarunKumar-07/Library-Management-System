import React, { useState } from "react";

const AddUser = () => {
  const [formData, setFormData] = useState({
    user: "",
    name: "",
    password: "",
    status: "",
    admin: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user", formData.user);
    console.log("name", formData.name);
    console.log("password", formData.password);
    console.log("status", formData.status);
    console.log("admin", formData.admin);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="container m-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">User</label>
          <div>
            <input
              type="radio"
              id="new-user"
              name="user"
              value="new-user"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="user" className="form-label ms-2">
              New User
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="existing-user"
              name="user"
              value="existing-user"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="existing-user" className="form-label ms-2">
              Exixting User
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="status" class="form-label">
            Status
          </label>
          <select
            class="form-select"
            id="status"
            name="status"
            onChange={handleInputChange}
          >
            <option selected>Select Option</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="usertype" class="form-label">
            Admin
          </label>
          <select
            class="form-select"
            id="admin"
            name="admin"
            onChange={handleInputChange}
          >
            <option selected>Select option</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="text-center gap-5">
          <button type="button" className="btn btn-success">
            <a href="/maintain" className="text-decoration-none text-white">
              Cancle
            </a>
          </button>
          &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
          <button type="submit" className="btn btn-success">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
