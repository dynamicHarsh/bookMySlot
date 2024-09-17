import axios from 'axios';

const axiosI = axios.create({
  baseURL: '', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true
});

export default axiosI;