const Sequelize = require("sequelize");

const config = require("../config/database");

const sequelize = new Sequelize({ ...config, host: "mysql" });

module.exports = { database: sequelize };
