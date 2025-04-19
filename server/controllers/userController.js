// server/controllers/userController.js
const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // get all users from DB
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { 
  createUser,
  getUsers,
 };
