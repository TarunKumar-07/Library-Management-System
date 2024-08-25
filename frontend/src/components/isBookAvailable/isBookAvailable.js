import React from "react";

const IsBookAvailable = () => {
  return (
    <div className="container mt-4">
      <h3 class="mb-4">Book Available</h3>
      <form>
        <div class="mb-3">
          <label for="bookName" class="form-label">
            Book Name
          </label>
          <select class="form-select" id="bookName">
            <option selected>Select a book</option>
            <option value="1">Book 1</option>
            <option value="2">Book 2</option>
            <option value="3">Book 3</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="author" class="form-label">
            Author
          </label>
          <select class="form-select" id="author">
            <option selected>Select an author</option>
            <option value="1">Author 1</option>
            <option value="2">Author 2</option>
            <option value="3">Author 3</option>
          </select>
        </div>

        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-secondary">
            <a href="/transaction" className="text-white text-decoration-none">Back</a>
          </button>
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default IsBookAvailable;
