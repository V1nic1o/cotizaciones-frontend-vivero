import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cotizaciones-backend-vivero.onrender.com/api'
});

export default api;