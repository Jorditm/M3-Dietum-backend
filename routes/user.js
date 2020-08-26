const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Doctor = require("../models/Doctor");
const Food = require("../models/Food");

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

router.put("/edit", isLoggedIn(), (req, res, next) => {
  const { name, email, password, isDoctor } = req.body;
  const model = isDoctor ? Doctor : User;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  model
    .findByIdAndUpdate(
      req.session.currentUser._id,
      // { $set: { name, email, password: hashedPassword } },
      { new: true }
    )
    .then((userEdit) => {
      //console.log(userEdit)
      req.session.currentUser = userEdit;
      res.json(userEdit);
    })
    .catch((error) => {
      console.log("Error while retrieving user details: ", error);
    });
});

router.post("/food/add", (req, res, next) => {
  console.log(req.body);
  const { name, weight, energy, userId } = req.body;
  const newFood = new Food({
    name,
    weight,
    energy,
  });
  newFood
    .save()
    .then((food) => {
      console.log("resultado final", food._id, userId);
      User.findByIdAndUpdate(
        userId,
        { $push: { food: food._id } },
        { new: true }
      )
        .populate("food")
        .then((food) => {
          res.status(200).json(food);
          // console.log(doctor.users, user._id, "segundo console log");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.delete("/delete/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("the User has been destroy");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
