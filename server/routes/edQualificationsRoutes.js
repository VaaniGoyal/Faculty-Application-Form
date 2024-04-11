//edQualificationsRoutes.js
const express = require('express');
const router = express.Router();
const edQualificationsController = require('../controllers/edQualificationsController');

// Routes
router.post('/createEducationalQualifications', edQualificationsController.createEducationalQualifications);
router.post('/addPhdDetails', edQualificationsController.addPhdDetails);
router.post('/addPgDetails', edQualificationsController.addPgDetails);
router.post('/addUgDetails', edQualificationsController.addUgDetails);
router.post('/addSchoolDetails', edQualificationsController.addSchoolDetails);
router.post('/addAdditionalQualifications', edQualificationsController.addAdditionalQualifications);
module.exports = router;





  