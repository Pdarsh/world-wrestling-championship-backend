const express = require("express");
const router = express.Router();

const matchController = require("../controller/matchController");

router.route("/").get(matchController.getmatches);
// .post(isvalidUser, UserController.postUser);
// router.route("/:id")
// .get(UserController.getUserById)
// .put(isvalidUser, UserController.updateUser)
// .delete(UserController.deleteUser);

module.exports = router;
