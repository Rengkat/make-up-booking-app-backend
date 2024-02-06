const express = require("express");
const { createUser, loginUser, updateUser } = require("../controllers/users");
const router = express.Router();
router.route("/register").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
