//publicationRoutes.js
const express = require('express');
const router = express.Router();
const publicationsController = require('../controllers/publicationsController');

// Routes
router.post('/createPublications', employmentController.createPublications);
router.post('/addBestPublications', employmentController.addBestPublications);
router.post('/addPatents', employmentController.addPatents);
router.post('/addBooks', employmentController.addBooks);
router.post('/addBookChapters', employmentController.addBookChapters);
module.exports = router;





  