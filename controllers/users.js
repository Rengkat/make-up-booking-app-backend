const User = require("../models/users");
const asyncHandler = required("../midleware/asyncHandler.js");
const bcrypt = require("bcrypt");
const bcryptSalt = bcrypt.genSalt(10);
const createUser = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      throw new Error("Please enter all fields");
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).send("User already exist");
    }
    await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.status(201).json({ success: true, message: "account created" });
  } catch (error) {
    throw new Error("Sorry! something went wrong");
    res.status(404).send("Sorry not found!");
  }
  res.status(201).json({ success: true, message: "User created successfully" });
});
const loginUser = asyncHandler(async (req, res) => {
  try {
    res.status(200).send("login");
  } catch (error) {}
});
const updateUser = asyncHandler(async (req, res) => {
  try {
  } catch (error) {}
});
module.exports = { createUser, loginUser, updateUser };
