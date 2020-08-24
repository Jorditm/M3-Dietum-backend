const express = require("express");
const router = express.Router();

const Doctor = require("../models/Doctor");
const User = require("../models/User");

router.get("/all-users", (req, res, next) => {
  Doctor.findById(req.session.currentUser._id)
    .populate("users")
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/createUser", (req, res, next) => {
  const {
    name,
    lastName,
    email,
    genre,
    weight,
    height,
    age,
    password,
  } = req.body;

  const newUser = new User({
    name,
    lastName,
    email,
    genre,
    weight,
    height,
    age,
    password,
  });
  newUser
    .save()
    .then((user) => {
      res.json(user).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/add/:id", (req, res, next) => {
  Doctor.findByIdAndUpdate(
    req.session.currentUser._id,
    { $push: { users: req.params.id } }
    // { new: true }
  )
    .populate("users")
    .then((doctor) => {
      res.status(200).json(doctor);
      console.log(doctor.users, user._id, "segundo console log");
    })
    .catch((err) => console.log(err));
});

router.get("/profile/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/delete/:id", (req, res, next) => {
  const {
    name,
    lastName,
    email,
    genre,
    weight,
    height,
    age,
    password,
  } = req.body;

  Doctor.findByIdAndUpdate(
    req.session.currentUser._id,
    { $pull: { users: req.params.id } }
    // { new: true }
  )
    .populate("users")
    .then((doctor) => {
      res.status(200).json(doctor);
      console.log(doctor.users, user._id, "segundo console log");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
