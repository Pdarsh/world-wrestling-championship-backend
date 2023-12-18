const express = require("express");
const router = express.Router();

const WrestlerController = require("../controller/wrestlerController");

router.route("/").get(WrestlerController.getWrestlers);
// .post(isvalidUser, UserController.postUser);
// router.route("/:id")
// .get(UserController.getUserById)
// .put(isvalidUser, UserController.updateUser)
// .delete(UserController.deleteUser);

module.exports = router;
