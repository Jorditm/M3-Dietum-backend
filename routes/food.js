const express = require("express");
const router = express.Router();

// const Dieitian = require("../models/Dieitian");
const Food = require("../models/Food");

const axios = require("axios");
const Patient = require("../models/Patient");
const TableFood = require("../models/TableFood");

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

router.post("/addFood/:patientId/:tableFoodId/:foodId", (req, res, next) => {
  Patient.findByIdAndUpdate(
    req.params.patientId,
    { $push: { [req.params.tableFoodId]: req.params.foodId } },
    { new: true }
  )
    .populate("tableFood")
    .then((food) => {
      console.log(food);
      res.json(food).status(200);
    })
    .catch((err) => console.log(err));
});

router.post("/createFood", (req, res, next) => {
  const {
    Descrip,
    CommonName,
    MfgName,
    ScientificName,
    Energy_kcal,
    Protein_g,
    Fat_g,
    Carb_g,
    Sugar_g,
  } = req.body;
});

router.get("/desayuno", (req, res, next) => {});

router.post("/get/:id", (req, res, next) => {
  Food.findById(req.params.id)
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

module.exports = router;
