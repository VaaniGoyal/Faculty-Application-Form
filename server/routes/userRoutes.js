//userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/getUser', userController.getUser);
router.post('/createUser', userController.createUser);

module.exports = router;




  