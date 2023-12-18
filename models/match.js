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
  wrestlers_involved: {
    type: Sequelize.ARRAY(Sequelize.STRING), // Assuming you store wrestler names
    allowNull: false,
  },
  winner_id: {
    type: Sequelize.ARRAY(Sequelize.INTEGER), // Store winner IDs as an array
    allowNull: false,
  },
});

module.exports = Match;
