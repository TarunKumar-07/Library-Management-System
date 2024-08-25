import React, { useState } from "react";

const AddMember = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    contactNo: "",
    addhar: "",
    sDate: "",
    eDate: "",
    membership: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("fName", formData.fName);
    console.log("lName", formData.lName);
    console.log("contactNo", formData.contactNo);
    console.log("addhar", formData.addhar);
    console.log("sDate", formData.sDate);
    console.log("eDate", formData.eDate);
    console.log("membership", formData.membership);
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
          <label htmlFor="fName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fName"
            name="fName"
            placeholder="Enter First Name"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lName"
            name="lName"
            placeholder="Enter Last Name"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNo" className="form-label">
            Contact Number
          </label>
          <input
            type="text"
            className="form-control"
            id="contactNo"
            name="contactNo"
            placeholder="Enter Contact Number"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactAdd" className="form-label">
            Contact Address
          </label>
          <input
            type="text"
            className="form-control"
            id="contactAdd"
            name="contactAdd"
            placeholder="Enter Contact Address"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="addhar" className="form-label">
            Addhar Number
          </label>
          <input
            type="text"
            className="form-control"
            id="addhar"
            name="addhar"
            placeholder="Enter Addhar Number"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="sDate"
            name="sDate"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eDate" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-control"
            id="eDate"
            name="eDate"
            placeholder="Enter End Date"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Membership</label>
          <div>
            <input
              type="radio"
              id="membership"
              name="membership"
              value="six-month"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="membership" className="form-label ms-2">
              Six Month
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="membership"
              name="membership"
              value="one-year"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="membership" className="form-label ms-2">
              One Year
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="membership"
              name="membership"
              value="two-year"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="membership" className="form-label ms-2">
              Two Year
            </label>
          </div>
        </div>
        <div className="text-center">
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

export default AddMember;
