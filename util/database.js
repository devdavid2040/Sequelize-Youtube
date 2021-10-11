const Sequelize = require("sequelize");

const sequelize = new Sequelize("testpure", "david", "admin", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;
