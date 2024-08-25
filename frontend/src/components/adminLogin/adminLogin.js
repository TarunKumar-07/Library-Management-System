import React, { useState } from "react";
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("name", formData.name);
    console.log("password", formData.password);
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
          <label htmlFor="adminName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter User Name"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            <a href="/admin-home" className="text-decoration-none text-white">
              Login
            </a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
