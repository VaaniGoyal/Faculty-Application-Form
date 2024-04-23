const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Emp_History = require('./Emp_History');
const Teach_Experience = require('./Teach_Experience');
const Research_Experience = require('./Research_Experience');
const Industry_Experience = require('./Industry_Experience');

const Employment = sequelize.define('Employment', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  present_position: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  date_leave: {
    type: DataTypes.STRING,
  },
  organisation: {
    type: DataTypes.STRING,
  },
  date_join: {
    type: DataTypes.STRING,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  isExperience: {
    type: DataTypes.BOOLEAN,
  },
  history_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    references: {
        model: Emp_History,
        key: 'id'
      }
  },
  teaching_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Teach_Experience,
        key: 'id'
      }
  },
  research_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Research_Experience,
        key: 'id'
      }
  },
  industry_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Industry_Experience,
        key: 'id'
      }
  },
  area_special: {
    type: DataTypes.TEXT,
  },
  current_area: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Employment;
