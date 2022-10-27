require("express-async-errors");

const express = require("express");

const errorHandler = require("./middlewares/errorHandler");
const routes = require("./routes");

const app = express();
const json = express.json();

app.use(json);
app.use(routes);
app.use(errorHandler);

module.exports = app;
