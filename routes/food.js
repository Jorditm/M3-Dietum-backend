const express = require("express");
const router = express.Router();

// const Dieitian = require("../models/Dieitian");

const axios = require("axios");

const Patient = require("../models/Patient");
const TableFood = require("../models/TableFood");
const Food = require("../models/Food");

router.get("/allFoods", (req, res, next) => {
  Food.find()
    .then((data) => {
      console.log("data", data);
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/searchFood", (req, res, next) => {
  var searchKey = new RegExp(req.body.textToSearch, "i");
  Food.find({ Descrip: searchKey })
    .then((data) => {
      console.log("data", data);
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/createFood", (req, res, next) => {
  const {
    Descrip,
    CommonName,
    Energy_kcal,
    Protein_g,
    Fat_g,
    Carb_g,
    Sugar_g,
  } = req.body;
  const newFood = new Food({
    Descrip,
    CommonName,
    Energy_kcal,
    Protein_g,
    Fat_g,
    Carb_g,
    Sugar_g,
  });
  newFood
    .save()
    .then((food) => {
      res.json(food).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/addFood", (req, res, next) => {
  console.log(req.body.patientId, req.body.foodId, req.body.tableMenu);
  var menuTime;
  Patient.findByIdAndUpdate(
    { _id: req.body.patientId },
    { $push: { diet: { $each: [{ [req.body.tableMenu]: req.body.foodId }] } } },
    { new: true }
  )
    .then((food) => {
      console.log("COMIDA", food);
      res.json(food).status(200);
    })
    .catch((err) => console.log(err));
});

router.get("/getFood/:id", (req, res, next) => {
  Food.findById(req.params.id)
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

module.exports = router;
