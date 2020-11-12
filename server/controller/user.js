const express = require('express');

const User = require('../models/user');


const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    await user.generateAuthToken();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const createCrUser = async (req, res) => {
  const user = new User({ ...req.body, cr: true });
  try {
    await user.save();
    await user.generateAuthToken();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  };
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  console.log(user);
  if (!user) {
    return res.status(400).send({error:"No such user Found"});
  }
  try {
    res.status(200).send(user);
  } catch {
    res.status(500).send("Unable to delete");
  }
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'password'];
  const isValidOperation = updates.every(update => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(500).send();
  }
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

const loginUser = async (req, res) => {
  
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.status(200).send({user,token});
  } catch (e) {
    res.status(400).send(e);
  };
};

const logout = async(req,res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch {
    res.status(500).send();
  };
};

const logoutAll = async(req,res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e){
    res.status(500).send(e);
  };
};

const userDetails = async (req, res) => {
  res.send({user:req.user,token:req.token})
};


module.exports = {
  createUser,
  createCrUser,
  deleteUser,
  updateUser,
  loginUser,
  logout,
  logoutAll,
  userDetails
};

