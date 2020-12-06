const express = require('express');
const Subject = require('../models/subject');
const user = require('./user');

const createSubject =async (req, res) => {
  const subject = new Subject({...req.body,owner:req.user._id});

  try {
    await subject.save();
    res.status(201).send(subject);
  } catch (e) {
    res.status(400).send({ msg: "FAILED TO CREATE SUBJECT" });
  }
};

const editSubject = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "days", "semester"];
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    return new Error('Invalid Update');
  }
  try {
    const subject = await Subject.findOne({ _id: req.params.id, owner: req.user._id, semester: req.subject.semester });
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

const deleteSubject =async (req,res) => {
  const subject =await Subject.findByIdAndDelete({ owner: req.user._id, _id: req.subject._id, semester: req.subject.semester });
  if (!subject) {
    return res.status(404).send({msg:"Subject not found"})
  }
  try {
    res.status(200).send(subject);
  } catch (e) {
    res.status(400).send({msg:"SUBJECT NOT DELETED"})
  }
  
}


module.exports = {
  createSubject,
  editSubject,
  deleteSubject
}