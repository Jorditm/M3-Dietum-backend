const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Doctor = require("../models/Doctor");

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
