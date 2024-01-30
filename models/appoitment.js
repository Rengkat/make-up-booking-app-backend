const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
  service: {
    type: String,
    required: [true, "appointment must have service"],
  },
  type: {},
  date: {},
  time: {},
});
module.exports = mongoose.model("Appointment", appointmentSchema);
