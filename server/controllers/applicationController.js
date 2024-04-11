//userController.js
// const { hashSync } = require("bcryptjs");
// const nodemailer = require('nodemailer');
const Application = require('../models/application'); // Import Sequelize model
const Personal_Details = require('../models/Personal_Details');

async function createApplication(req, res) {
  try {
    const { reg_id, app_number, add_number, dept, date, post } = req.body;
    if (typeof app_number !== 'string') {
      throw new Error(' Application number must be strings');
    }
    if (typeof add_number !== 'string') {
      throw new Error(' Advertisement number must be strings');
    }
    if (typeof dept !== 'string') {
      throw new Error(' Department must be strings');
    }
    if (typeof post !== 'string') {
      throw new Error('Post must be a string');
    }
    const newApplication = await Application.create({ app_number, add_number, dept, date, post });
    return res.status(201).json(newApplication);
  } catch (error) {
    console.error("Error creating application:", error);
    return res.status(500).json({ message: "Failed to create application." });
  }
}


async function addPersonalDetails(req, res) {
    try {
      const { app_number, f_name, m_name, l_name, nationality, dob, gender, marital_status, category, id_proof, father_name, mob, email, alt_mob, alt_email, landline, c_address, p_address } = req.body;
      const newDetails = await Personal_Details.create({ app_number, f_name, m_name, l_name, nationality, dob, gender, marital_status, category, id_proof, father_name, mob, email, alt_mob, alt_email, landline, c_address, p_address });
      return res.status(201).json(newDetails);
    } catch (error) {
      console.error("Error adding personal details:", error);
      return res.status(500).json({ message: "Failed to add personal details." });
    }
}

module.exports = { createApplication, addPersonalDetails };
