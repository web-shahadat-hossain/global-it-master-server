const express = require("express");
const userController = require("../Controllers/user.controller");

const router = express.Router();

router.route("/:email").put(userController.putUser).get(userController.getUser);

module.exports = router;
