const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Additional_Qualifications = sequelize.define('Additional_Qualifications', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: false
  },
  university: {
    type: DataTypes.STRING,
    allowNull: false
  },
  branch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year_join: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  year_complete: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cgpa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  division: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Additional_Qualifications;
