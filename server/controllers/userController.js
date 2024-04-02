const { hashSync } = require("bcryptjs");
const User = require('../models/user');

async function getUser(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Failed to fetch users." });
  }
}

async function createUser(req, res) {
  try {
    const { name, password } = req.body;
    const hashedPassword = hashSync(password, 10);
    const newUser = await User.create({ name, password: hashedPassword });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to create user." });
  }
}

module.exports = { getUser, createUser };
