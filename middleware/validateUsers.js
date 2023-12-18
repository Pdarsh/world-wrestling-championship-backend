const { v4: uuidv4 } = require("uuid");
const UserSchema = require("../models/Schemas/UserSchema");

const isvalidUser = (req, res, next) => {
  const userData = req.body;
  let requestMethod = req.method;
  if (requestMethod === "POST") {
    userData.id = uuidv4().slice(0, 8);
    userData.isDeleted = false;
  }
  if (UserSchema.validate(userData).error) {
    const errormsg = getErrorMsg(UserSchema.validate(userData));
    return res.status(400).send({ error: true, msg: errormsg });
  } else {
    req.userData = userData;
    next();
  }
};

const getErrorMsg = (result) => {
  if (result.error.details[0].context.key === "password") {
    return `"password" must be a combination of letters and numbers with minimum 5 characters`;
  }
  return result.error.details[0].message;
};

module.exports = {
  isvalidUser: isvalidUser,
  getErrorMsg: getErrorMsg,
};
