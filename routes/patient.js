const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Patient = require("../models/Patient");
const Dietitian = require("../models/Dietitian");
const Food = require("../models/Food");

router.post("/food/add/desayuno", (req, res, next) => {
  console.log(req.body);
  const { name, weight, energy, patientId } = req.body;
  const newFood = new Food({
    name,
    weight,
    energy,
  });
  newFood
    .save()
    .then((food) => {
      console.log("resultado final", food._id, patientId);
      `patient`
        .findByIdAndUpdate(
          patientId,
          { $push: { desayuno: food._id } },
          { new: true }
        )
        .then((food) => {
          console.log(food);
          res.json(food).status(200);
          // console.log(dietitian.patients, patient._id, "segundo console log");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.post("/food/delete/:idPatient/:comida/:idComida", (req, res, next) => {
  console.log(req.body);

  Patient.findByIdAndUpdate(
    req.params.idPatient,
    {
      $pull: { [req.params.comida]: req.params.idComida },
    },
    { new: true }
  )
    .then((food) => {
      console.log(food);
      res.json(food).status(200);
      // console.log(dietitian.patients, patient._id, "segundo console log");
    })
    .catch((err) => console.log(err));
});

router.post("/food/add/almuerzo", (req, res, next) => {
  console.log(req.body);
  const { name, weight, energy, patientId } = req.body;
  const newFood = new Food({
    name,
    weight,
    energy,
  });
  newFood
    .save()
    .then((food) => {
      console.log("resultado final", food._id, patientId);
      Patient.findByIdAndUpdate(
        patientId,
        { $push: { almuerzo: food._id } },
        { new: true }
      )
        .then((food) => {
          res.status(200).json(food);
          // console.log(dietitian.patients, patient._id, "segundo console log");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.post("/food/add/comida", (req, res, next) => {
  console.log(req.body);
  const { name, weight, energy, patientId } = req.body;
  const newFood = new Food({
    name,
    weight,
    energy,
  });
  newFood
    .save()
    .then((food) => {
      console.log("resultado final", food._id, patientId);
      Patient.findByIdAndUpdate(
        patientId,
        { $push: { comida: food._id } },
        { new: true }
      )
        .then((food) => {
          res.status(200).json(food);
          // console.log(dietitian.patients, patient._id, "segundo console log");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.post("/food/add/merienda", (req, res, next) => {
  console.log(req.body);
  const { name, weight, energy, patientId } = req.body;
  const newFood = new Food({
    name,
    weight,
    energy,
  });
  newFood
    .save()
    .then((food) => {
      console.log("resultado final", food._id, patientId);
      Patient.findByIdAndUpdate(
        PatientId,
        { $push: { merienda: food._id } },
        { new: true }
      )
        .then((food) => {
          res.status(200).json(food);
          // console.log(dietitian.patients, patient._id, "segundo console log");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.post("/food/add/cena", (req, res, next) => {
  console.log(req.body);
  const { name, weight, energy, patientId } = req.body;
  const newFood = new Food({
    name,
    weight,
    energy,
  });
  newFood
    .save()
    .then((food) => {
      console.log("resultado final", food._id, patientId);
      Patient.findByIdAndUpdate(
        patientId,
        { $push: { cena: food._id } },
        { new: true }
      )
        .then((food) => {
          res.status(200).json(food);
          // console.log(dietitian.patients, patient._id, "segundo console log");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

// router.delete("/delete/:id", (req, res, next) => {
//   Patient.findByIdAndDelete(req.params.id)
//     .then(() => {
//       console.log("the Patient has been destroy");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

module.exports = router;
