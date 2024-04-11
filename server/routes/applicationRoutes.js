//applicationRoutes.js
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Routes
router.post('/createApplication', applicationController.createApplication);
router.post('/addPersonalDetails', applicationController.addPersonalDetails);
module.exports = router;




  