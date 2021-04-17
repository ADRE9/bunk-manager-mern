const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    classStatus: {
      type: String,
      required: true,
    },
    attendanceOf: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
