import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.reddit.com/r/reactjs',
});

export default api;
