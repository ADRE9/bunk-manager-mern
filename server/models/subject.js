const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  days: [
    {
      day: {
        type: String,
      }
    }
  ],
  totalClasses: {
    type: Number,
    default:0,
  },
  classesAttended: {
    type: Number,
    default:0,
  },
  semester: {
    type: Number,
    required:true,
  },
  owner: {
    
  }
})