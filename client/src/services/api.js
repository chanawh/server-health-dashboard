import axios from 'axios';

export const fetchServers = async () => {
  const res = await fetch('http://localhost:5000/api/servers');  // <-- Full URL to backend
  if (!res.ok) throw new Error('Failed to fetch servers');
  return res.json();  // <-- return the JSON data
};
