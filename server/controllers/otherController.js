const Memberships = require('../models/Memberships'); 
const Trainings = require('../models/Trainings');
const Awards = require('../models/Awards');
const Sponsored_Projects = require('../models/Sponsored_Projects');
const Consultancy_Projects = require('../models/Consultancy_Projects');
const Phd_Supervisions = require('../models/Phd_Supervisions');
const Master_Supervisions = require('../models/Master_Supervisions');
const Bachelor_Supervisions = require('../models/Bachelor_Supervisions');


async function addMemberships(req, res) {
    try {
      const { app_number, name_society, status } = req.body;
      const newMemberships = await Memberships.create({ app_number, name_society, status });
      return res.status(201).json(newMemberships);
    } catch (error) {
      console.error("Error ading memberships:", error);
      return res.status(500).json({ message: "Failed to add memberships." });
    }
}

async function addTrainings(req, res) {
    try {
      const { app_number, type, organisation, year, duration } = req.body;
      const newTrainings = await Trainings.create({ app_number, type, organisation, year, duration });
      return res.status(201).json(newTrainings);
    } catch (error) {
      console.error("Error ading trainings:", error);
      return res.status(500).json({ message: "Failed to add trainings." });
    }
}

async function addAwards(req, res) {
    try {
      const { app_number, name, awarded_by, year } = req.body;
      const newAwards = await Awards.create({ app_number, name, awarded_by, year });
      return res.status(201).json(newAwards);
    } catch (error) {
      console.error("Error ading awards:", error);
      return res.status(500).json({ message: "Failed to add awards." });
    }
}

async function addSponsoredProjects(req, res) {
    try {
      const { app_number, agency, title, amount, period, role, status } = req.body;
      const newSponsoredProjects = await Sponsored_Projects.create({ app_number, agency, title, amount, period, role, status });
      return res.status(201).json(newSponsoredProjects);
    } catch (error) {
      console.error("Error ading sponsored projects:", error);
      return res.status(500).json({ message: "Failed to add sponsored projects." });
    }
}

async function addConsultancyProjects(req, res) {
    try {
      const { app_number, organisation, title, amount, period, role, status } = req.body;
      const newConsultancyProjects = await Consultancy_Projects.create({ app_number, organisation, title, amount, period, role, status });
      return res.status(201).json(newConsultancyProjects);
    } catch (error) {
      console.error("Error ading consulatncy projects:", error);
      return res.status(500).json({ message: "Failed to add consultancy projects." });
    }
}

async function addPhdSupervsions(req, res) {
    try {
      const { app_number, name, title, role, status, year } = req.body;
      const newPhdSupervisions = await Phd_Supervisions.create({ app_number, name, title, role, status, year });
      return res.status(201).json(newPhdSupervisions);
    } catch (error) {
      console.error("Error ading phd supervisions:", error);
      return res.status(500).json({ message: "Failed to add phd supervisions." });
    }
}

async function addMasterSupervsions(req, res) {
    try {
      const { app_number, name, title, role, status, year } = req.body;
      const newMasterSupervisions = await Master_Supervisions.create({ app_number, name, title, role, status, year });
      return res.status(201).json(newMasterSupervisions);
    } catch (error) {
      console.error("Error ading master supervisions:", error);
      return res.status(500).json({ message: "Failed to add master supervisions." });
    }
}

async function addBachelorSupervsions(req, res) {
    try {
      const { app_number, name, title, role, status, year } = req.body;
      const newBachelorSupervisions = await Bachelor_Supervisions.create({ app_number, name, title, role, status, year });
      return res.status(201).json(newBachelorSupervisions);
    } catch (error) {
      console.error("Error ading bachelor supervisions:", error);
      return res.status(500).json({ message: "Failed to add bachelor supervisions." });
    }
}

module.exports = { addMemberships, addTrainings, addAwards, addSponsoredProjects, addConsultancyProjects, addPhdSupervsions, addMasterSupervsions, addBachelorSupervsions };
