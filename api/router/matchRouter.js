const express = require("express");
const router = express.Router();

const matchController = require("../controller/matchController");

router.route("/").get(matchController.getmatches);
router.route("/match").post(matchController.postMatch);
// router.route("/:id")
// .get(UserController.getUserById)
// .put(isvalidUser, UserController.updateUser)
// .delete(UserController.deleteUser);

module.exports = router;
