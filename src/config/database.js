require("dotenv").config({ override: true });

module.exports = {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
