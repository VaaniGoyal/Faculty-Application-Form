const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/application', applicationRoutes);
async function ConnectToDatabaseAuthentication() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    console.log("All model was just checked!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
// Start the server
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await ConnectToDatabaseAuthentication(); // Connect to the database on server start
});
ConnectToDatabaseAuthentication();