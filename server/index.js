// server.js or index.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // custom DB connection
const serverRoutes = require('./routes/serverRoutes');
const userRoutes = require('./routes/userRoutes'); // user routes
const authRoutes = require('./routes/authRoutes');


// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // allow frontend
app.use(express.json()); // parse JSON

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', serverRoutes); // general server routes
app.use('/api/users', userRoutes); // user-specific routes

app.use('/api', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
