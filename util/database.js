const Sequelize = require("sequelize");

const sequelize = new Sequelize("testpure2", "david", "admin", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;
