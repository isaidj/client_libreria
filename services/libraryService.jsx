import axios from "axios";
//api https://www.dbooks.org/api/
const API_URL = "https://www.dbooks.org/api";

const libraryService = {
  getBooks: async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  },
  getRecentBooks: async () => {
    const response = await axios.get(`${API_URL}/recent`);
    return response.data;
  },

  getBookById: async (id) => {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data;
  },
  createBook: async (book) => {
    const response = await axios.post(`${API_URL}/books`, book);
    return response.data;
  },
  updateBook: async (id, book) => {
    const response = await axios.put(`${API_URL}/books/${id}`, book);
    return response.data;
  },
  deleteBook: async (id) => {
    const response = await axios.delete(`${API_URL}/books/${id}`);
    return response.data;
  },
};

export default libraryService;
