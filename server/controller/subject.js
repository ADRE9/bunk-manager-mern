const Subject = require('../models/subject');
const user = require('./user');
const svgFile = require('../utils/svgFile');
//const sharp = require('sharp');
//utils
const subjectTemplate = require('../utils/subjectTemplate');
const labTemplate = require('../utils/labTemplate');

//creating new subject
const createSubject =async (req, res) => {
  const subject = new Subject({...req.body,owner:req.user._id});

  try {
    await subject.save();
    res.status(201).send(subject);
  } catch (e) {
    res.status(400).send({ msg: "FAILED TO CREATE SUBJECT" });
  }
};


//editing subject
const editSubject = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "days", "semester"];
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    return new Error('Invalid Update');
  }
  try {
    const subject = await Subject.findOne({ _id: req.params.id, owner: req.user._id });
    console.log(subject);
    if (!subject) {
      return res.status(404).send({msg:"subject not found"})
    }
    updates.forEach(update => {
      subject[update] = req.body[update];
    })
    await subject.save();
    res.status(200).send({ msg: "UPDATED SUCCESSFULLY" });
  } catch (e) {
    res.status(400).send({ msg: "UPDATE FAILED" });
  }
};


//deleting subject
const deleteSubject =async (req,res) => {
  const subject =await Subject.findByIdAndDelete({ owner: req.user._id, _id: req.subject._id });
  if (!subject) {
    return res.status(404).send({msg:"Subject not found"})
  }
  try {
    res.status(200).send(subject);
  } catch (e) {
    res.status(400).send({msg:"SUBJECT NOT DELETED"})
  } 
}

//creating templates
const createTemplates = async (req, res) => {
    try {
      for (let i = 0; i < 5; i++){
        const subject = await new Subject(subjectTemplate(req, i));
        const buffer = svgFile();
        subject.backgroundImage = buffer;
        await subject.save();
        if (i < 4) {
          const subject = await new Subject(labTemplate(req, i));
          const buffer = svgFile();
          subject.backgroundImage = buffer;
          await subject.save();
        }
      }
      res.status(201).send();
    } catch (e) {
      res.status(500).send({ msg: e });
    }
};

//get subjects by semester
const getSubjectBySemester = async (req, res) => {
  try {
    await req.user.populate({
      path: "subjects",
      match: {
        semester:req.params.semester
      }
    }).execPopulate();
    res.status(200).send(req.user.subjects)
  } catch {
    res.status(400).send();
  }
};


module.exports = {
  createSubject,
  editSubject,
  deleteSubject,
  createTemplates,
  getSubjectBySemester
}