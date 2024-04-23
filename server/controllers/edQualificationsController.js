const Educational_Qualifications = require('../models/Educational_Qualifications'); 
const Phd_Details = require('../models/Phd_Details');
const Pg_Details = require('../models/Pg_Details');
const Ug_Details = require('../models/Ug_Details');
const School_Details = require('../models/School_Details');
const Additional_Qualifications = require('../models/Additional_Qualifications');

async function createEducationalQualifications(req, res) {
    try {
      const { app_number, phd_id, pg_id, ug_id, school_id, id } = req.body;
      const newEducationalQualifications = await Educational_Qualifications.create({ app_number, phd_id, pg_id, ug_id, school_id, id });
      return res.status(201).json(newEducationalQualifications);
    } catch (error) {
      console.error("Error creating educational qualifications:", error);
      return res.status(500).json({ message: "Failed to create educational qualifications." });
    }
}

async function addPhdDetails(req, res) {
    try {
      const { university, dept, supervisor, year, date_defence, date_award, title } = req.body;
      const newPhdDetails = await Phd_Details.create({ university, dept, supervisor, year, date_defence, date_award, title });
      return res.status(201).json(newPhdDetails);
    } catch (error) {
      console.error("Error adding phd details:", error);
      return res.status(500).json({ message: "Failed to add phd details." });
    }
}

async function addPgDetails(req, res) {
    try {
      const { degree, university, branch, year_join, year_complete, duration, cgpa, division } = req.body;
      const newPgDetails = await Pg_Details.create({ degree, university, branch, year_join, year_complete, duration, cgpa, division });
      return res.status(201).json(newPgDetails);
    } catch (error) {
      console.error("Error adding pg details:", error);
      return res.status(500).json({ message: "Failed to add pg details." });
    }
}

async function addUgDetails(req, res) {
    try {
      const { degree, university, branch, year_join, year_complete, duration, cgpa, division } = req.body;
      const newUgDetails = await Ug_Details.create({ degree, university, branch, year_join, year_complete, duration, cgpa, division });
      return res.status(201).json(newUgDetails);
    } catch (error) {
      console.error("Error adding ug details:", error);
      return res.status(500).json({ message: "Failed to add ug details." });
    }
}

async function addSchoolDetails(req, res) {
    try {
      const { std, school, year, cgpa, division } = req.body;
      const newSchoolDetails = await School_Details.create({ std, school, year, cgpa, division });
      return res.status(201).json(newSchoolDetails);
    } catch (error) {
      console.error("Error adding school details:", error);
      return res.status(500).json({ message: "Failed to add school details." });
    }
}

async function addAdditionalQualifications(req, res) {
    try {
      const { degree, university, branch, year_join, year_complete, duration, cgpa, division } = req.body;
      const newAdditionalQualifications = await Additional_Qualifications.create({ degree, university, branch, year_join, year_complete, duration, cgpa, division });
      return res.status(201).json(newAdditionalQualifications);
    } catch (error) {
      console.error("Error adding Additional Qualifications:", error);
      return res.status(500).json({ message: "Failed to add Additional Qualifications." });
    }
}

module.exports = { createEducationalQualifications, addPhdDetails, addPgDetails, addUgDetails, addSchoolDetails, addAdditionalQualifications };
