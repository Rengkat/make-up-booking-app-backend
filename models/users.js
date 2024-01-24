const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter firstName"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter lastName"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
});
module.exports = mongoose.model("User", UserSchema);
