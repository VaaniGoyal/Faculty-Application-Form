//userController.js
const { hashSync } = require("bcryptjs");
const User = require('../models/user'); // Import Sequelize model

async function createUser(req, res) {
  try {
    const { f_name, l_name, email, category, password } = req.body;
    if (typeof f_name !== 'string') {
      throw new Error(' First name must be strings');
    }
    if (typeof l_name !== 'string') {
      throw new Error(' First name must be strings');
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      throw new Error('Invalid email address');
    }
    if (typeof category !== 'string') {
      throw new Error(' First name must be strings');
    }
    if (typeof password !== 'string' || password.length < 8) {
      throw new Error('Password must be a string with a minimum length of 8 characters');
    }
    const newUser = await User.create({ f_name, l_name, email, category, password });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to create user." });
  }
}

async function getUser(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Failed to fetch users." });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(400).json({ message: "Email not found!" });
    }

    if (password != user.password) {
      return res.status(400).json({ message: "Incorrect password!" });
    }
    const reg_id = user.reg_id;

    res.json({
      message: `Welcome, ${user.name}`,
      reg_id: reg_id,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getUser, createUser, login };
