// "use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const ListaLibros = ({ books, onBookSelect }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-8">Book List</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link
            key={book.libro_id}
            className="bg-zinc-400 shadow-md rounded-md p-4"
            href={`/${book.libro_id}`}
          >
            <img
              src={book.img}
              alt={book.titulo}
              className="w-full h-48 object-cover object-center mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{book.titulo}</h2>
            <p className="text-gray-950">{book.autor}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListaLibros;
