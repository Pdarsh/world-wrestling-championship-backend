const logger = require("../logger")

const errorMiddleware = (err, req, res, next) => {
    logger.error('Unhandled error-', err);
  
    const statusCode = 500;
    const message = 'Internal Server Error';
  
    res.status(statusCode).json({ error: message });
  };
  
  module.exports = errorMiddleware;
  
  