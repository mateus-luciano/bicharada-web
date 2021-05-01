import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bicharada-backend.herokuapp.com/',
});

export default api;
