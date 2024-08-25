const bookService = require("../service/bookService");

class BookController {
  async createBook(req, res) {
    try {
      const { bm, name, date, copies } = req.body;
      const saveBook = await bookService.createBook(bm, name, date, copies);
      res.json(saveBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new BookController();
