//publicationRoutes.js
const express = require('express');
const router = express.Router();
const publicationsController = require('../controllers/publicationsController');

// Routes
router.post('/createPublications', publicationsController.createPublications);
router.post('/addBestPublications', publicationsController.addBestPublications);
router.post('/addPatents', publicationsController.addPatents);
router.post('/addBooks', publicationsController.addBooks);
router.post('/addBookChapters', publicationsController.addBookChapters);
module.exports = router;





  