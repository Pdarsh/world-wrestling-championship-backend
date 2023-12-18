const logger = require('../logger');

const errorLoggingMiddleware = (methodName, error,...args) => {
  if(args.length>0){
    logger.error(`Error in method- ${methodName}\nArguments- ${JSON.stringify(args)}\nError message- ${error.message}`);  
  }
  else{
    logger.error(`Error in method- ${methodName}\nError message- ${error}`);  

  }
};

module.exports = errorLoggingMiddleware;
