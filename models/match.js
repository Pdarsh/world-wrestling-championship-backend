const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Match = sequelize.define('matches', {
  show_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  match_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  match_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  wrestlers_involved_name: {
    type: Sequelize.ARRAY(Sequelize.STRING), 
    allowNull: false,
  },
  wrestlers_involved_id:{
    type: Sequelize.ARRAY(Sequelize.INTEGER), 
    allowNull: false,
  },
  winner_id: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  },
}, {timestamps: false});

module.exports = Match;
