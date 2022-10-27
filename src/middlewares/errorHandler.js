const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    msg: "an error occurred",
  });

  next();
};

module.exports = errorHandler;
