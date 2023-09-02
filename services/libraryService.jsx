import axios from "axios";

const API_URL = "http://192.168.1.79:3005/api";

const libraryService = {
  getLibros: async () => {
    const response = await axios.get(`${API_URL}/libros`);
    return response.data;
  },

  getLibroById: async (id) => {
    const response = await axios.get(`${API_URL}/libros/${id}`);
    return response.data;
  },
  createLibro: async (book) => {
    const response = await axios.post(`${API_URL}/libros`, book);
    return response.data;
  },
  updateLibro: async (id, book) => {
    const response = await axios.put(`${API_URL}/libros/${id}`, book);
    return response.data;
  },
  deleteLibro: async (id) => {
    const response = await axios.delete(`${API_URL}/libros/${id}`);
    return response.data;
  },
};

export default libraryService;
