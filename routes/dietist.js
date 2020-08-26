const express = require("express");
const router = express.Router();
const uploader = require("../configs/cloudinary-setup");

const Doctor = require("../models/Doctor");
const User = require("../models/User");

router.get("/get", (req, res, next) => {
  Doctor.findById(req.session.currentUser._id)
    .populate("users")
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/upload", uploader.single("photo"), (req, res, next) => {
  // console.log("file is: ", req.file);
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});

router.post("/createUser", (req, res, next) => {
  const {
    imageUrl,
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
    imageUrl,
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
    { $push: { users: req.params.id } },
    { new: true }
  )
    .populate("users")
    .then((doctor) => {
      res.status(200).json(doctor);
      // console.log(doctor.users, user._id, "segundo console log");
    })
    .catch((err) => console.log(err));
});

router.get("/profile/:id", (req, res, next) => {
  User.findById(req.params.id)
    .populate("desayuno almuerzo comida merienda cena")
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/delete/:id", (req, res, next) => {
  const {
    imageUrl,
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
