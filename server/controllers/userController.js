//userController.js
const { hashSync } = require("bcryptjs");
const nodemailer = require('nodemailer');
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
    if (typeof password !== 'string') {
      throw new Error('Password must be a string');
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
    const { reg_id } = req.params; 
    const user = await User.findByPk(reg_id, { attributes: ['name'] });

    if (user) {
      return res.status(200).json({ name: user.name });
    } else {
      return res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Failed to fetch user." });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(400).json({ message: "Email not found!" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    res.json({
      message: `Welcome, ${user.f_name}`,
      reg_id: user.reg_id, // Include the reg_id in the response
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function changePassword(req, res) {
  try {
    const { reg_id, currentPassword, newPassword } = req.body;
    
    const user = await User.findByPk(reg_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Verify current password
    if (currentPassword !== user.password) {
      return res.status(400).json({ message: "Incorrect current password." });
    }

    // Update user's password
    await user.update({ password: newPassword });

    return res.status(200).json({ message: "Password changed successfully." });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({ message: "Failed to change password." });
  }
}

async function resetPassword(req, res) {
  try {
    const { email } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Generate a temporary password
    const tempPassword = Math.random().toString(36).slice(-8); // Generate an 8-character alphanumeric password

    // Update the user's password in the database
    await user.update({ password: tempPassword });

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service provider here
      // For example, for Gmail:
      service: 'Gmail',
      auth: {
        user: 'madlover619619@gmail.com',
        pass: 'Mad@lover69',
      },
    });

    // Create email message
    const mailOptions = {
      from: 'madlover619619@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `You are receiving this email because you (or someone else) has requested to reset the password for your account.\n\n`
            + `Your temporary password is: ${tempPassword}\n\n`
            + `Please log in with this password and update your password.\n`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Temporary password sent to your email." });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({ message: "Failed to reset password." });
  }
}


module.exports = { getUser, createUser, login, changePassword, resetPassword };
