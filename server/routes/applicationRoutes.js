//applicationRoutes.js
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const multer = require('multer');

// Define storage engine and destination for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()) // Define file name (you can customize this)
    }
});

// Initialize Multer with configuration
const upload = multer({ storage: storage });

// Routes
router.post('/createApplication', applicationController.createApplication);

// Use upload.fields() to handle multiple file uploads with different field names
router.post('/addPersonalDetails', upload.fields([{ name: 'id_proof', maxCount: 1 }, { name: 'user_image', maxCount: 1 }]), applicationController.addPersonalDetails);

module.exports = router;

  