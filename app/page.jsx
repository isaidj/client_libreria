"use client";

import ListaLibros from "@/components/ListaLibros";
import libraryService from "@/services/libraryService";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await libraryService.getLibros();
      setBooks(response);
    };
    fetchBooks();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center ">
        <h1 className="text-3xl font-bold text-center mb-8">Mi libreria</h1>
      </div>
      <ListaLibros books={books} />
    </div>
  );
}
