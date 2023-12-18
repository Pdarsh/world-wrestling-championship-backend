const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Wrestler = sequelize.define('wrestlers', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  height: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
  },
  matches: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  weight: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
  },
  rank: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  matches_won: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: Sequelize.TEXT,
  },
});

module.exports = Wrestler;
