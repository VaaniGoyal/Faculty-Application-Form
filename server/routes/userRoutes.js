// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController.js');

// // Route for creating a user
// router.post('/createUser', userController.createUser);
// router.get('/', userController.getUser);
// module.exports = function (app) {
//     app.use("/api/users", router);
//   };

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/', userController.getUser);
router.post('/', userController.createUser);

module.exports = router;




  