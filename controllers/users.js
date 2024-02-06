const User = require("../models/users");
const asyncHandler = required("../midleware/asyncHandler.js");
const bcrypt = require("bcrypt");
const bcryptSalt = bcrypt.genSalt(10);
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const UserCreated = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
  } catch (error) {
    console.log(error);
  }
  res.status(201).json({ success: true, message: "User created successfully" });
};
const loginUser = (req, res) => {
  try {
    res.status(200).send("login");
  } catch (error) {}
};
const updateUser = (req, res) => {
  try {
  } catch (error) {}
};
module.exports = { createUser, loginUser, updateUser };
