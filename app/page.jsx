"use client";
import BookDetail from "@/components/BookDetail";
import BookList from "@/components/BookList";
import libraryService from "@/services/libraryService";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await libraryService.getRecentBooks();
      setBooks(response);
    };
    fetchBooks();
  }, []);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="App">
      <h1>My Library</h1>
      <BookList books={books} onBookSelect={handleBookSelect} />
      {selectedBook && <BookDetail book={selectedBook} />}
    </div>
  );
}
