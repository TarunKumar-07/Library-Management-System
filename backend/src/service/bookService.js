const Book = require("../models/book");

class BookService {
  async createBook(bm, name, date, copies) {
    const newBook = new Book({ bm, name, date, copies });
    return await newBook.save();
  }
}

module.exports = new BookService();
