const express = require("express");

const healthCheckController = require("./controllers/healthCheckController");
const userController = require("./controllers/userController");

const router = express.Router();

// healthCheckController routes
router.get("/health-check", healthCheckController.healthCheck);

// userController routes
router.post("/user", userController.createUser);
router.get("/user", userController.getUser);
router.put("/user", userController.updateUser);
router.delete("/user", userController.deleteUser);

module.exports = router;
