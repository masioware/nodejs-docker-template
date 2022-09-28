const express = require("express");

const routes = require("./routes");

const app = express();
const json = express.json();

app.use(json);
app.use(routes);

module.exports = app;
