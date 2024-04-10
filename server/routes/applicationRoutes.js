//applicationRoutes.js
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Routes
router.post('/createApplication', applicationController.createApplication);
router.post('/addPersonalDetails', applicationController.addPersonalDetails);
// router.post('/login', userController.login);
// router.post('/changePass', userController.changePassword);
// router.post('/resetPass', userController.resetPassword);
module.exports = router;




  