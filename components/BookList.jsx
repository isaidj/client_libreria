import React, { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios.get("/api/books");
      setBooks(result.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
