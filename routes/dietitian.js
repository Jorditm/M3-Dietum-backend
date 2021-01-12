const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

const uploader = require("../configs/cloudinary-setup");

const Dietitian = require("../models/Dietitian");
const Patient = require("../models/Patient");

const { isLoggedIn } = require("../helpers/middlewares");
const TableFood = require("../models/TableFood");

router.put("/edit/:id", isLoggedIn(), (req, res, next) => {
  const { name, lastName, proName } = req.body;

  // const salt = bcrypt.genSaltSync(saltRounds);
  // const hashedPassword = bcrypt.hashSync(password, salt);
  Dietitian.findByIdAndUpdate(
    req.session.currentUser._id,
    { $set: { name, lastName, proName } },
    { new: true }
  )
    .then((userEdit) => {
      console.log("Edit user", userEdit);
      req.session.currentUser = userEdit;
      res.json(userEdit);
    })
    .catch((error) => {
      console.log("Error while retrieving user details: ", error);
    });
});

router.get("/allPatients", (req, res, next) => {
  Dietitian.findById(req.session.currentUser._id)
    .populate("patients")
    .then((data) => {
      console.log(data);
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

//Fotos  de perfil
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

router.post("/createPatient", (req, res, next) => {
  const {
    imageUrl,
    name,
    lastName,
    email,
    gender,
    age,
    weight,
    height,
    hipPerimeter,
    neckPerimeter,
    objectives,
    foodAllergies,
    smoke,
  } = req.body;

  const newPatient = new Patient({
    imageUrl,
    name,
    lastName,
    email,
    gender,
    age,
    weight,
    height,
    hipPerimeter,
    neckPerimeter,
    objectives,
    foodAllergies,
    smoke,
  });
  newPatient
    .save()
    .then((patient) => {
      res.json(patient).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/add/:id", (req, res, next) => {
  Dietitian.findByIdAndUpdate(
    req.session.currentUser._id,
    { $push: { patients: req.params.id } },
    { new: true }
  )
    .populate("patients")
    .then((dietitian) => {
      res.status(200).json(dietitian);
      //console.log(dietitian.patients, patient._id, "segundo console log");
    })
    .catch((err) => console.log(err));
});

router.get("/profile/:id", (req, res, next) => {
  Patient.findById(req.params.id)
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
});

router.post("/delete/:id", (req, res, next) => {
  Patient.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
  Dietitian.findByIdAndUpdate(
    req.session.currentUser._id,
    { $pull: { patients: req.params.id } }
    // { new: true }
  )
    .populate("patients")
    .then((dietitian) => {
      res.status(200).json({ message: "Borrado" }, dietitian);
      // console.log(dietitian.patients, patient._id, "segundo console log");
    })
    .catch((err) => console.log(err));
});

router.put("/editPatient/:id", isLoggedIn(), (req, res, next) => {
  const {
    imageUrl,
    name,
    lastName,
    email,
    gender,
    age,
    weight,
    height,
    hipPerimeter,
    neckPerimeter,
    objectives,
    foodAllergies,
    smoke,
  } = req.body;
  Patient.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        imageUrl,
        name,
        lastName,
        email,
        gender,
        age,
        weight,
        height,
        hipPerimeter,
        neckPerimeter,
        objectives,
        foodAllergies,
        smoke,
      },
    },
    { new: true }
  )
    .then((patientEdit) => {
      console.log("Edit patient", patientEdit);
      res.json(patientEdit);
    })
    .catch((error) => {
      console.log("Error while retrieving patient details: ", error);
    });
});

// router.post("/message", (req, res, next) => {
//   const { message } = req.body;
//   const newMessage = new message({ message });
//   newMessage
//     .save()
//     .then((message) => {
//       res.json(message).status(200);
//     })
//     .catch((err) => {
//       res.json(err).status(500);
//     });
// });

module.exports = router;
