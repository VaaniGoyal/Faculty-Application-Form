const Employment = require('../models/Employment'); 
const Emp_History = require('../models/Emp_History');
const Teach_Experience = require('../models/Teach_Experience');
const Research_Experience = require('../models/Research_Experience');
const Industry_Experience = require('../models/Industry_Experience');


async function createEmployment(req, res) {
    try {
      const { present_position, status, date_leave, organisation, date_join, duration, isExperience, area_special, current_area } = req.body;
      const newEmployment = await Employment.create({ present_position, status, date_leave, organisation, date_join, duration, isExperience, area_special, current_area });
      res.status(201).json({
        ...newEmployment.toJSON(),
        emp_id: newEmployment.id, 
      });
    } catch (error) {
      console.error("Error creating employment:", error);
      return res.status(500).json({ message: "Failed to create employment." });
    }
}

async function addEmpHistory(req, res) {
    try {
      const { position, organisation, date_join, date_leave, duration, emp_id } = req.body;
      const newEmpHistory = await Emp_History.create({ position, organisation, date_join, date_leave, duration, emp_id });
      return res.status(201).json(newEmpHistory);
    } catch (error) {
      console.error("Error adding employment history:", error);
      return res.status(500).json({ message: "Failed to add employment history." });
    }
}

async function addTeachExp(req, res) {
    try {
      const { position, employer, course_taught, ug_pg, stud_number, date_join, date_leave, duration, emp_id } = req.body;
      const newTeachExp = await Teach_Experience.create({ position, employer, course_taught, ug_pg, stud_number, date_join, date_leave, duration, emp_id });
      return res.status(201).json(newTeachExp);
    } catch (error) {
      console.error("Error adding teaching experience:", error);
      return res.status(500).json({ message: "Failed to add teaching experience." });
    }
}

async function addResearchExp(req, res) {
    try {
      const { position, institute, supervisor, date_join, date_leave, duration, emp_id } = req.body;
      const newResearchExp = await Research_Experience.create({ position, institute, supervisor, date_join, date_leave, duration, emp_id });
      return res.status(201).json(newResearchExp);
    } catch (error) {
      console.error("Error adding research experience:", error);
      return res.status(500).json({ message: "Failed to add research experience." });
    }
}

async function addIndustryExp(req, res) {
    try {
      const { organisation, work_profile, date_join, date_leave, duration, emp_id } = req.body;
      const newIndustryExp = await Industry_Experience.create({ organisation, work_profile, date_join, date_leave, duration, emp_id });
      return res.status(201).json(newIndustryExp);
    } catch (error) {
      console.error("Error adding industry experience:", error);
      return res.status(500).json({ message: "Failed to add industry experience." });
    }
}


module.exports = { createEmployment, addEmpHistory, addTeachExp, addResearchExp, addIndustryExp };
