// server/controllers/adminController.js
const jwt = require('jsonwebtoken');

exports.getData = (req, res) => {
  // Extract the token from the authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user has an admin role
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. You are not an admin.' });
    }

    // Send the protected admin data
    res.json({ message: 'This is protected admin data.' });
  } catch (error) {
    // Handle invalid or expired token
    return res.status(400).json({ message: 'Invalid token or expired.' });
  }
};
