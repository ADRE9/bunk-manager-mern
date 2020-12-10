const Attendance = require('../models/attendance');

const createAttendance = async (req, res) => {
  const attendance = new Attendance({ classOccurence: true, classBunked: false, attendanceOfSubject: req.subject._id });
  try {
    await attendance.save();
    res.status(201).send(attendance);
  } catch (e) {
    res.status(400).send({ msg: "Attendance Cannot Be Created" });
  }
}

const createBunk = async (req, res) => {
  const attendance = new Attendance({ classOccurence: true, classBunked: true, attendanceOfSubject: req.subject._id });
  try {
    await attendance.save();
    res.status(201).send(attendance);
  } catch (e) {
    res.status(500).send({msg:"Class Bunk Cannot Be Created"})
  }
};

const createGap = async (req, res) => {
  const attendance = new Attendance({ classOccurence: false, classBunked: false, attendanceOfSubject: req.subject._id });
  try {
    await attendance.save();
    res.status(201).send(attendance);
  } catch (e) {
    res.status(500).send({msg:"Class Gap Cannot Br Created"})
  }
};

const editAttendance = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["classOccurence", "classBunked"];
  const isValid = updates.every(update => {
    return allowedUpdates.includes(update);
  })

  if (!isValid) {
    return new Error("Invalid Update");
  }
  try {
    const attendance = await Attendance.findOne({ _id: req.params.id, attendanceOfSubject: req.subject._id });
    if (!attendance) {
      return res.status(400).send(attendance);
    }
    updates.forEach(update => {
      attendance[update] = req.body[update];
    });
    await attendance.save();
    res.status(200).send({ msg: "Update Successful" })
  } catch (e) {
    res.status(500).send({ msg: "Update Not Successful" });
  }
};

module.exports = {
  createAttendance,
  createBunk,
  editAttendance,
  createGap
}