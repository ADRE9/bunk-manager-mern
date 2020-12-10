const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  classOccurence: {
    type: Boolean,
    default: true
  },
  classBunked: {
    type: Boolean,
    default: false
  },
  attendanceOfSubject: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;