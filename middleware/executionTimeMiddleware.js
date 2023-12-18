const logger = require("../logger")

const executionTimeMiddleware = (req, res, next) => {
    const start = Date.now();
  
    res.on('finish', () => {
      const end = Date.now();
      const executionTime = end - start;
      logger.info(`-------- Method executed in ${executionTime}ms --------`);
    });
  
    next();
  };
  
  module.exports = executionTimeMiddleware;
  