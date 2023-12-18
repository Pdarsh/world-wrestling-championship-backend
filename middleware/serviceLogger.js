const serviceLogger = (service, method, ...args) => {
    console.log(`Service method invoked- ${service}.${method}`);
    if(args.length>0){
        console.log(`Arguments- ${JSON.stringify(args)}`);
    }
};
  
module.exports = serviceLogger;