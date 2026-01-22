const db = require("../db/connection.js");
const Book = require("../models/book.js");
const books = require("./books.js");


const insertData = async () => {
  await db.dropDatabase();

  await Book.create(books);

  console.log("Books have entered the Database!!");

  await db.close();
};

insertData();