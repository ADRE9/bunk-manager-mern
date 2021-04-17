const mongoose = require("mongoose");
const Attendance = require("../models/attendance");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  days: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  totalClasses: {
    type: Number,
    default: 0,
  },
  classesBunked: {
    type: Number,
    default: 0,
  },
  semester: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  subjectType: {
    type: String,
    default: "regular",
  },
  backgroundImage: {
    type: Buffer,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

//creating connections between subject and attendance
subjectSchema.virtual("attendances", {
  ref: "Attendance",
  localField: "_id",
  foreignField: "attendanceOf",
});

//deleting attendances before deleting subjects
subjectSchema.pre("remove", async function (next) {
  const subject = this;
  const attendances = await Attendance.find({ attendanceOf: subject._id });
  attendances.forEach(async (attendance) => {
    await Attendance.findByIdAndDelete({ _id: attendance._id });
  });
  next();
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
