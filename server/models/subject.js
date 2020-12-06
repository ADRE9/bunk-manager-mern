const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  days: [
    {
      day: {
        type: String,
        lowercase: true,
      }
    }
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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;