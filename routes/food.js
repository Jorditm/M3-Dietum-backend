const express = require("express");
const router = express.Router();

// const Doctor = require("../models/Doctor")  ;
// const User = require("../models/User");
const Food = require("../models/Food");

router.get("/", (req, res, next) => {
  console.log("hola");
  Food.find()
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

module.exports = router;
