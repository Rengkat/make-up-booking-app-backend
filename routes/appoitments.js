const express = require("express");
const {
  getAllAppointments,
  getUserAppointments,
  postAppointment,
  getSingleAppointment,
  deleteAppointment,
  editAppointment,
} = require("../controllers/appoitment");
const router = express.Router();
router.route("/").get(getAllAppointments);
router.route("/userID").get(getUserAppointments).post(postAppointment);
router
  .route("/appointmentID")
  .get(getSingleAppointment)
  .delete(deleteAppointment)
  .patch(editAppointment);
module.exports = router;
