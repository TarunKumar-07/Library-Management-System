import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      console.log(data);
      if (data.admin === "yes") {
        navigate("/admin-home");
      } else {
        navigate("/user-home");
      }
    } catch (error) {
      console.error(error.message);
      // Optionally handle error state here
    }
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
    <h2>Welcome to</h2>
    <h1>Library Management System</h1>
    <h4>Login to Continue</h4>
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
