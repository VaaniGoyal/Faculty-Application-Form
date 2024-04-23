const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Teach_Experience = sequelize.define('Teach_Experience', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  position: {
    type: DataTypes.STRING,
  },
  employer: {
    type: DataTypes.STRING,
  },
  course_taught: {
    type: DataTypes.STRING,
  },
  ug_pg: {
    type: DataTypes.STRING,
  },
  stud_number: {
    type: DataTypes.INTEGER,
  },
  date_join: {
    type: DataTypes.STRING,
  },
  date_leave: {
    type: DataTypes.STRING,
  },
  duration: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Teach_Experience;
