import { useEffect, useState } from 'react';
import { fetchServers } from '../services/api';  // <-- importing your API call

const Servers = () => {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);  // <-- for loading state
  const [error, setError] = useState(null);  // <-- for error handling

  useEffect(() => {
    const loadServers = async () => {
      try {
        const data = await fetchServers();  // <-- fetching data from backend
        setServers(data);  // <-- setting the fetched data in the state
      } catch (err) {
        setError('Failed to fetch servers');  // <-- error handling
      } finally {
        setLoading(false);  // <-- loading finished
      }
    };

    loadServers();  // <-- calling the function on component mount
  }, []);

  if (loading) return <div>Loading...</div>;  // <-- loading state
  if (error) return <div>{error}</div>;  // <-- error state

  return (
    <div>
      <h2>Servers</h2>
      <ul>
        {servers.length > 0 ? (
          servers.map((server) => (
            <li key={server.id}>{server.name}</li>  // <-- display the server names
          ))
        ) : (
          <li>No servers available</li>  // <-- handle case when there are no servers
        )}
      </ul>
    </div>
  );
};

export default Servers;
