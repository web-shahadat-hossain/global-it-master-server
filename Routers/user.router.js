const express = require("express");
const userController = require("../Controllers/user.controller");
const jwtVerify = require("../middleware/verifyJWT");

const router = express.Router();

router.route("/").get(jwtVerify, userController.getALLUser);
router
  .route("/:email")
  .put(userController.putUser)
  .get(jwtVerify, userController.getUser);

router.route("/admin/:email").put(jwtVerify, userController.adminRolePut);

module.exports = router;
