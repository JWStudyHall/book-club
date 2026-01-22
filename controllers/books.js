const Book = require("../models/book.js");

const bookIndex = async (req, res) => {
  const booksData = await Book.find({});
  res.render("books/index.ejs", {
    books: booksData,
  });
};

const bookShow = async (req, res) => {
  const bookData = await Book.findById(req.params.bookId);
  res.render("books/show.ejs", {
    book: bookData,
  });
};

module.exports = {
  bookIndex,
  bookShow,
};
