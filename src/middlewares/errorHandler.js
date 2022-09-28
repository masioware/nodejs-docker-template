const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    msg: "an error occurred",
  });
};

module.exports = errorHandler;
