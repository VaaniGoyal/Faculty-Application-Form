//otherRoutes.js
const express = require('express');
const router = express.Router();
const otherController = require('../controllers/otherController');

// Routes
router.post('/addMemberships', otherController.addMemberships);
router.post('/addTrainings', otherController.addTrainings);
router.post('/addAwards', otherController.addAwards);
router.post('/addSponsoredProjects', otherController.addSponsoredProjects);
router.post('/addConsultancyProjects', otherController.addConsultancyProjects);
router.post('/addPhdSupervsions', otherController.addPhdSupervsions);
router.post('/addMasterSupervsions', otherController.addMasterSupervsions);
router.post('/addBachelorSupervsions', otherController.addBachelorSupervsions);

module.exports = router;