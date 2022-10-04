const healthCheck = (req, res) => res.json({ status: "ok" }).status(200);

module.exports = { healthCheck };
