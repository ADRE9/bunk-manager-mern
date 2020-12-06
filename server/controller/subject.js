const express = require('express');

const Semester = require('../models/semester');


const addSemester = async(req, res) => {
  const semester = new Semester({
    ...req.body,
    student: req.user._id
  });

  try {
    await semester.save();
    res.send(200).send({ msg: "SEMESTER_ADDED" });
  } catch {
    res.send(500).send({msg:"REQUEST_FAILED"})
  }
};

const updateSemester = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['semester'];
  const isValidOperation = updates.every(update => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    res.status(500).send({ msg: "Invalid Updates" });
  }

  try {
    updates.forEach(update => {
      req.semester[update] = req.body[update]
    });
    await req.semester.save();
    res.status(200).send({ msg: "Update successful" });
  } catch {
    res.status(400).send({ msg: "Update Failed" });
  }
};

const deleteSemester=async()