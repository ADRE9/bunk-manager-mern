const Subject = require("../models/subject");
const user = require("./user");
const svgFile = require("../utils/svgFile");
//const sharp = require('sharp');
//utils
const subjectTemplate = require("../utils/subjectTemplate");
const labTemplate = require("../utils/labTemplate");

//creating new subject
const createSubject = async (req, res) => {
  const subject = new Subject({ ...req.body, owner: req.user._id });
  const buffer = svgFile();
  subject.backgroundImage = buffer;
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
  const allowedUpdates = ["name", "days", "semester", "subjectType"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    return new Error("Invalid Update");
  }
  try {
    const subject = await Subject.findOne({
      _id: req.subject._id,
      owner: req.user._id,
    });
    console.log(subject);
    if (!subject) {
      return res.status(404).send({ msg: "subject not found" });
    }
    updates.forEach((update) => {
      subject[update] = req.body[update];
    });
    //subject.semester = req.user.currentSemester;
    await subject.save();
    res.status(200).send(subject);
  } catch (e) {
    res.status(400).send({ msg: "UPDATE FAILED" });
  }
};

//deleting subject
const deleteSubject = async (req, res) => {
  const subject = await Subject.findOne({
    owner: req.user._id,
    _id: req.subject._id,
  });
  if (!subject) {
    return res.status(404).send({ msg: "Subject not found" });
  }
  try {
    await subject.remove();
    res.status(200).send(subject);
  } catch (e) {
    res.status(400).send({ msg: "SUBJECT NOT DELETED" });
  }
};

//creating templates
const createTemplates = async (req, res) => {
  try {
    for (let i = 0; i < 5; i++) {
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
    await req.user
      .populate({
        path: "subjects",
        match: {
          semester: req.params.semester,
        },
      })
      .execPopulate();
    res.status(200).send(req.user.subjects);
  } catch {
    res.status(400).send();
  }
};

const getAllSemester = async (req, res) => {
  const semesters = await Subject.aggregate([
    { $match: { owner: req.user._id } },
    { $project: { semester: 1, _id: 0 } },
    { $group: { _id: "$semester" } },
  ]);
  try {
    res.status(200).send(semesters);
  } catch (e) {
    res.status(400).send({ msg: "No semester found" });
  }
};

const deactivateSubject = async (req, res) => {
  try {
    const subject = await Subject.updateOne(
      { owner: req.user._id, _id: req.params.id, active: true },
      { active: false }
    );
    if (!subject) {
      return res.status(404).send({ msg: "Subject Not Found" });
    }
    res.status(200).send(subject);
  } catch {
    res.status(400).send({ msg: "Bad Request" });
  }
};

const deactivateAllSubject = async (req, res) => {
  try {
    const subjects = await Subject.updateMany(
      { owner: req.user._id, semester: req.body.semester, active: true },
      { active: false }
    );
    if (subjects.length === 0) {
      return res.status(404).send({ msg: "Subject Not Found" });
    }
    res.status(200).send(subjects);
  } catch {
    res.status(400).send({ msg: "Bad Request" });
  }
};

module.exports = {
  createSubject,
  editSubject,
  deleteSubject,
  createTemplates,
  getSubjectBySemester,
  getAllSemester,
  deactivateSubject,
  deactivateAllSubject,
};
