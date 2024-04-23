const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Industry_Experience = sequelize.define('Industry_Experience', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  organisation: {
    type: DataTypes.STRING,
  },
  work_profile: {
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

module.exports = Industry_Experience;
