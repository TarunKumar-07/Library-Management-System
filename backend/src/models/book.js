const mongoose = require("../configuration/dbConfig");

const bookSchema = new mongoose.Schema({
  bm: String,
  name: String,
  date: String,
  copies: String,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
