const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Research_Experience = sequelize.define('Research_Experience', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  position: {
    type: DataTypes.STRING,
  },
  institute: {
    type: DataTypes.STRING,
  },
  supervisor: {
    type: DataTypes.STRING,
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

module.exports = Research_Experience;
