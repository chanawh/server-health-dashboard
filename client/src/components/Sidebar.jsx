import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h1 className="text-2xl font-bold mb-6">🔧 Dashboard</h1>
      <nav className="space-y-2">
        <Link to="/" className="block p-2 rounded hover:bg-gray-200">Servers</Link>
        <Link to="/alerts" className="block p-2 rounded hover:bg-gray-200">Alerts</Link>
        <Link to="/settings" className="block p-2 rounded hover:bg-gray-200">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;