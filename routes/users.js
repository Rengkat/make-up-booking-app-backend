const express = require("express");
const { createUser, loginUser, getProducts } = require("../controllers/users");
const router = express.Router();
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/products").get(getProducts);
module.exports = router;
