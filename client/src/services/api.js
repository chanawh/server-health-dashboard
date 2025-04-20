// client/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example of the fetchServers function that you may want to export
export const fetchServers = async () => {
  try {
    const response = await api.get('/servers');
    return response.data; // Assuming the servers are in the response's data field
  } catch (error) {
    console.error("Error fetching servers:", error);
    throw error;
  }
};

export default api;
