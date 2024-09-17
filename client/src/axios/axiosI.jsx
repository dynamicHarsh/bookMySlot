import axios from 'axios';

const axiosI = axios.create({
  baseURL: 'https://bookmyslot-server.vercel.app', 
  withCredentials: true
});

export default axiosI;