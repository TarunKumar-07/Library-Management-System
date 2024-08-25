import React from "react";

const PayFine = () => {
  return (
    <div className="container m-5">
      <form>
        <h3 className="mb-4">Pay Fine</h3>

        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">
            Select Book Name
          </label>
          <select id="bookName" className="form-select" required>
            <option value="">Choose a book</option>
            {/* Add options dynamically here */}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Select Author
          </label>
          <select id="author" className="form-select" required>
            <option value="">Choose an author</option>
            {/* Add options dynamically here */}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="serialNo" className="form-label">
            Serial No
          </label>
          <input
            type="text"
            className="form-control"
            id="serialNo"
            placeholder="Enter serial number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="issueDate" className="form-label">
            Issue Date
          </label>
          <input type="date" className="form-control" id="issueDate" required />
        </div>

        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">
            Return Date
          </label>
          <input
            type="date"
            className="form-control"
            id="returnDate"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="actualReturnDate" className="form-label">
            Actual Return Date
          </label>
          <input
            type="date"
            className="form-control"
            id="actualReturnDate"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fineCalculated" className="form-label">
            Fine Calculated
          </label>
          <input
            type="text"
            className="form-control"
            id="fineCalculated"
            placeholder="Fine amount"
            readOnly
          />
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="finePaid" />
          <label className="form-check-label" htmlFor="finePaid">
            Fine Paid
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="remarks" className="form-label">
            Remarks
          </label>
          <textarea
            className="form-control"
            id="remarks"
            rows="3"
            placeholder="Enter any remarks here"
          ></textarea>
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary">
            <a href="/transaction" className="text-white text-decoration-none">
              Back
            </a>
          </button>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayFine;
