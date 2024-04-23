//employment.js
const express = require('express');
const router = express.Router();
const employmentController = require('../controllers/employmentController');

// Routes
router.post('/createEmployment', employmentController.createEmployment);
router.post('/addEmpHistory', employmentController.addEmpHistory);
router.post('/addTeachExp', employmentController.addTeachExp);
router.post('/addResearchExp', employmentController.addResearchExp);
router.post('/addIndustryExp', employmentController.addIndustryExp);
module.exports = router;





  