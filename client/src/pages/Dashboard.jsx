
// pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { fetchServers } from '../services/api';

const Dashboard = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const loadServers = async () => {
      const data = await fetchServers();
      setServers(data);
    };
    loadServers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Server Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servers.map(server => (
          <div key={server._id} className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-bold">{server.name}</h3>
            <p>Status: <span className={server.online ? 'text-green-500' : 'text-red-500'}>{server.online ? 'Online' : 'Offline'}</span></p>
            <p>CPU: {server.cpuUsage}%</p>
            <p>Memory: {server.memoryUsage}%</p>
            <p>Disk: {server.diskUsage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
