import axios from 'axios';

export const api = axios.create({
  // this line breaks Jest :)
  baseURL: import.meta.env.VITE_API_URL,
});
