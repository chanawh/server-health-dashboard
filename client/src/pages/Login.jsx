import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-8 shadow-lg rounded w-96">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <input type="text" placeholder="Username" className="w-full mb-3 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </div>
    </div>
  );
};

export default Login;