const express = require("express");
const libraryService = require("./libraryService.jsx");

const app = express();
const port = 3000;

app.get("/books", async (req, res) => {
  const books = await libraryService.getBooks();
  res.json(books);
});

app.get("/recent", async (req, res) => {
  const recentBooks = await libraryService.getRecentBooks();
  res.json(recentBooks);
});

app.get("/books/:id", async (req, res) => {
  const book = await libraryService.getBookById(req.params.id);
  res.json(book);
});

app.post("/books", async (req, res) => {
  const book = req.body;
  const newBook = await libraryService.createBook(book);
  res.json(newBook);
});

app.put("/books/:id", async (req, res) => {
  const book = req.body;
  const updatedBook = await libraryService.updateBook(req.params.id, book);
  res.json(updatedBook);
});

app.delete("/books/:id", async (req, res) => {
  await libraryService.deleteBook(req.params.id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
