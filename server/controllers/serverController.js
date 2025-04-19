// controllers/serverController.js
const getHome = (req, res) => {
  res.json({ message: 'API is running...' });
};

// @desc    Get all servers
// @route   GET /api/servers
// @access  Public
const getServers = async (req, res) => {
  try {
    // Sample data, replace with real database query if needed
    const servers = [
      { id: 1, name: 'Server One' },
      { id: 2, name: 'Server Two' },
    ];
    res.json(servers);  // Send servers data as a response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching servers' });
  }
};

module.exports = { 
  getHome,
  getServers,
 };
