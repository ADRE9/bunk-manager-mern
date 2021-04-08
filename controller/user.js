const express = require("express");

const User = require("../models/user");

const email = require("../utils/email");

const createUser = async (req, res) => {
  //waits creation of index before entering new user to prevent duplication of users
  await User.init();
  //---
  const user = new User({ ...req.body });
  try {
    await user.save();
    await email(
      user.name,
      user.email,
      user.department,
      user.roles,
      user.regdId
    );

    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send({ msg: "User Already Exist" });
  }
};

const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).send(req.user);
  } catch {
    res.status(500).send({ msg: "Unable to delete" });
  }
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "password", "currentSemester"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(500).send();
  }
  try {
    const user = await User.findOne({ _id: req.user._id });
    if (!user) {
      return res.status(400).send({ msg: "No such User Found" });
    }
    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    await user.save();
    res.status(200).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send({ msg: "User login failed" });
  }
};

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send({ msg: "logged out successfully" });
  } catch {
    res.status(500).send();
  }
};

const logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send({ msg: "logged out sucessfully from all devices" });
  } catch (e) {
    res.status(500).send(e);
  }
};

const userData = async (req, res) => {
  res.send({ user: req.user, token: req.token });
};

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  loginUser,
  logout,
  logoutAll,
  userData,
};
