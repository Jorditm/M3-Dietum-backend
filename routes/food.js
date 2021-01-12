const express = require("express");
const router = express.Router();

// const Dieitian = require("../models/Dieitian");
const Food = require("../models/Food");

const axios = require("axios");
const Patient = require("../models/Patient");
const TableFood = require("../models/TableFood");
const { populate } = require("../models/Food");

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

// router.post("/createTable", (req, res, next) => {
//   const { desayuno, almuerzo, comida, merienda, cena } = req.body;
//   const newTableFood = new TableFood({
//     desayuno,
//     almuerzo,
//     comida,
//     merienda,
//     cena,
//   });
//   newTableFood
//     .save()
//     .then((tableFood) => {
//       res.json(tableFood).satatus(200);
//     })
//     .catch((err) => {
//       res.json(err).status(500);
//     });
// });

// router.post("/addTable/:patientId/:tableId", (req, res, next) => {
//   Patient.findByIdAndUpdate(
//     req.params.patientId,
//     { $push: { tableFood: req.params.tableId } },
//     { new: true }
//   )
//     .then((data) => {
//       console.log("CREATE TABLE", data);
//       res.json(data).status(200);
//     })
//     .catch((err) => {
//       res.json(err).status(500);
//     });
// });

// router.get("/tableFood/:id", (req, res, next) => {
//   TableFood.findById(req.params.id)
//     .populate("desayuno almuerzo comida merienda cena")
//     .then((data) => {
//       res.json(data).status(200);
//     })
//     .catch((err) => {
//       res.json(err).status(500);
//     });
// });

// router.get("/:tableMenu/:tableId", (req, res, next) => {
//   TableFood.findById(req.params.tableId);
// });

// router.post("/delete/:tableId", (req, res, next) => {
//   TableFood.findByIdAndDelete(req.params.tableId)
//     .then((data) => {
//       res.json(data).status(200);
//     })
//     .catch((err) => {
//       res.json(err).status(500);
//     });
// });

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

// router.post("/addFood/:foodId/:tableMenu/:tableId", (req, res, next) => {
//   TableFood.findByIdAndUpdate(
//     req.params.tableId,
//     { $push: { [req.params.menu]: req.params.foodId } },
//     { new: true }
//   )

//     .then((food) => {
//       console.log(food);
//       res.json(food).status(200);
//     })
//     .catch((err) => console.log(err));
// });

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
