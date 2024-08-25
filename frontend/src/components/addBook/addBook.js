import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [formData, setFormData] = useState({
    bm: "",
    name: "",
    date: "",
    copies: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("bm", formData.bm);
    // console.log("name", formData.name);
    // console.log("date", formData.date);
    // console.log("copies", formData.copies);

    try {
      const response = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json(response);
      console.log(data);
      navigate("/maintain");
    } catch (error) {
      console.error(error.message);
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
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div>
            <input
              type="radio"
              id="bm"
              name="bm"
              value="book"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="bm" className="form-label ms-2">
              Book
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="bm"
              name="bm"
              value="movie"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="bm" className="form-label ms-2">
              Movie
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Book/Movie Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Book/Movie Name"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date of Procurement
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="copies" className="form-label">
            Number of Copies
          </label>
          <input
            type="text"
            className="form-control"
            id="copies"
            name="copies"
            placeholder="1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-success">
            <a href="/maintain" className="text-decoration-none text-white">
              Cancle
            </a>
          </button>
          &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
          <button type="submit" className="btn btn-success">
            Comfirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
