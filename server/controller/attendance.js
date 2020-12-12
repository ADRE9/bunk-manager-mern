const Attendance = require('../models/attendance');

//create attendance
const createAttendance = async (req, res) => {
  const attendance = new Attendance({ ...req.body, attendanceOf: req.params.id });
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);


  try {
    const attendanceCheck = await Attendance.find({
    attendanceOf: req.params.id, createdAt: { $gte:`${start}`, $lt:`${ end }`}
    });
    if (attendanceCheck.length!==0) {
     return res.status(400).send({msg:"Attendance already exist"});
    }
    await attendance.save();
    res.status(201).send(attendance);
  } catch (e) {
    res.status(400).send({ msg: "Attendance Creation Failed" });
  }
};

const editAttendance = async (req, res) => {
  const updates = Object.keys(req.body);
  const isValid = updates[0]==="classStatus"
  if (!isValid) {
    return res.status(400).send();
  }
  try {
    const attendance = await Attendance.findOne({ attendanceOf: req.params.id });
    if (!attendance) {
      return res.status(404).send({ msg: "No such attendance Found to update" });
    }
    attendance.classStatus = req.body.classStatus;
    await attendance.save();
    res.status(200).send(attendance);
  } catch (e) {
    res.status(400).send({ msg: "Unable to update attendance" })
  }
};

module.exports = {
  createAttendance,
  editAttendance
}