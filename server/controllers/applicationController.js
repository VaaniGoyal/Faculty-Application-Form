//applicationController.js
const Application = require('../models/application'); // Import Sequelize model
const Personal_Details = require('../models/Personal_Details');
const path = require('path'); // Import the path module

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

async function createApplication(req, res) {
  try {
    const { app_number, add_number, dept, date, post } = req.body;
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
    return res.status(201).json({ app_number: newApplication.app_number });
  } catch (error) {
    console.error("Error creating application:", error);
    return res.status(500).json({ message: "Failed to create application." });
  }
}

async function addPersonalDetails(req, res) {
  try {
      const { app_number, f_name, m_name, l_name, nationality, dob, gender, marital_status, category, father_name, mob, email, alt_mob, alt_email, landline, c_address, p_address } = req.body;

      // Ensure both id_proof and user_image files are included
      if (!req.files || !req.files.id_proof || !req.files.user_image) {
          return res.status(400).json({ message: 'Both ID proof and user image files are required.' });
      }

      const id_proof = req.files.id_proof[0].path; // Assuming id_proof is uploaded as a single file
      const user_image = req.files.user_image[0].path; // Assuming user_image is uploaded as a single file

      const newDetails = await Personal_Details.create({ app_number, f_name, m_name, l_name, nationality, dob, gender, marital_status, category, father_name, mob, email, alt_mob, alt_email, landline, c_address, p_address, id_proof, user_image });

      return res.status(201).json(newDetails);
  } catch (error) {
      console.error("Error adding personal details:", error);
      return res.status(500).json({ message: "Failed to add personal details." });
  }
}

// Function to view the uploaded file
async function viewUploadedFile(req, res) {
    try {
        const appNumber = req.params.appNumber; // Get the application number from the request parameters

        // Query the database to find the ID proof file path based on the application number
        const personalDetails = await Personal_Details.findOne({ where: { app_number: appNumber } });

        if (!personalDetails) {
            return res.status(404).json({ message: 'Personal details not found for the given application number.' });
        }

        // Retrieve the ID proof file path from the database
        const idProofFilePath = personalDetails.id_proof;

        // Construct the absolute file path
        const absoluteFilePath = path.join(__dirname, 'server', '..', '..', idProofFilePath); // Adjust the path to match your project structure

        // Send the file as a response
        res.sendFile(absoluteFilePath);
    } catch (error) {
        console.error("Error viewing uploaded file:", error);
        return res.status(500).json({ message: "Failed to view uploaded file." });
    }
}



module.exports = { createApplication, addPersonalDetails, viewUploadedFile };
