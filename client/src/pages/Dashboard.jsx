import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (token) {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));  // Decoding JWT to get the role
            if (decodedToken.role !== 'admin') {
                window.location.href = '/login';
            } else {
                setIsAdmin(true);
            }
        } else {
            window.location.href = '/login';
        }
    }, []);

    if (!isAdmin) return <div>Loading...</div>;

    return <div>Welcome to the Admin Dashboard</div>;
};

export default Dashboard;
