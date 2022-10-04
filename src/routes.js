const express = require("express");

const { healthCheck } = require("./controllers/healthCheckController");

const router = express.Router();

router.get("/health-check", healthCheck);

module.exports = router;
