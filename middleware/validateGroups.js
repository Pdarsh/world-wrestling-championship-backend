const { v4: uuidv4 } = require("uuid");
const GroupSchema = require("../models/Schemas/GroupSchema");
const { removeDuplicatefromArray } = require("../helpers/helpers")

const isvalidGroup = (req, res, next) => {
  const groupData = req.body;
  let requestMethod = req.method;
  if (requestMethod === "POST") {
    groupData.id = uuidv4().slice(0, 8);
    groupData.permissions = removeDuplicatefromArray(groupData.permissions)
  }
  if (GroupSchema.validate(groupData).error) {
    const errormsg = getErrorMsg(GroupSchema.validate(groupData));
    return res.status(400).send({ error: true, msg: errormsg });
  } else {
    req.groupData = groupData;
    next();
  }
};

const getErrorMsg = (result) => {
    if (result.error.details[0].context.label.toString().includes("permissions")) {
      return `permissions can only contain READ|WRITE|DELETE|SHARE|UPLOAD_FILES`;
    }
    return result.error.details[0].message;
};

module.exports = {isvalidGroup: isvalidGroup};