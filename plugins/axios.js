import axios from 'axios';

export default function ({ $axios }, inject) {
  // Use the environment variable for baseURL
  const api = axios.create({
    baseURL: process.env.baseUrl, // Access the baseURL from .env
    timeout: 10000,
  });

  // Rest of your plugin code...
  inject('api', api);
}
