const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE,
  process.env.DATABASE_PASSWORD,
  {
    dialect: process.env.DATABASE,
    host: process.env.HOST,
    logging: false,
  }
);

module.exports = sequelize;
