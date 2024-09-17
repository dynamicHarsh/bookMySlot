import axios from 'axios';

const axiosI = axios.create({
  baseURL: 'http://localhost:8080', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true
});

export default axiosI;