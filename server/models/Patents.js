const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Publications = require('./Publications');

const Patents = sequelize.define('Patents', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  inventor: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.INTEGER,
  },
  date_file: {
    type: DataTypes.STRING,
  },
  date_publish: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  pub_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Publications,
        key: 'id'
      }
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Patents;
