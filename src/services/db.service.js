const Sequelize = require("sequelize");
const config = require("../config/config");

console.log("config:", config);
const sequelize = new Sequelize(config.dbName, config.name, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Employee = require("../models/employee.model")(sequelize, Sequelize);

module.exports = db;
