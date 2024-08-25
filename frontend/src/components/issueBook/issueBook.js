import React from "react";

const IssueBook = () => {
  return (
    <div className="container m-5">
      <form>
        <h3 class="mb-4">Book Issue</h3>

        <div class="mb-3">
          <label for="bookName" class="form-label">
            Select Book Name
          </label>
          <select class="form-select" id="bookName" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>Book 1</option>
            <option>Book 2</option>
            <option>Book 3</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="authorName" class="form-label">
            Select Author
          </label>
          <select class="form-select" id="authorName" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>Author 1</option>
            <option>Author 2</option>
            <option>Author 3</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="issueDate" class="form-label">
            Issue Date
          </label>
          <input type="date" class="form-control" id="issueDate" required />
        </div>

        <div class="mb-3">
          <label for="returnDate" class="form-label">
            Return Date
          </label>
          <input type="date" class="form-control" id="returnDate" required />
        </div>

        <div class="mb-3">
          <label for="remarks" class="form-label">
            Remarks
          </label>
          <textarea class="form-control" id="remarks" rows="3"></textarea>
        </div>

        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-secondary">
            <a href="/transaction" className="text-white text-decoration-none">
              Back
            </a>
          </button>
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueBook;
