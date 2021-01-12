const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: {
    type: String,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    unique: true,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  // password: { type: String, minlength: 6 },
  weight: { type: Number, default: "" },
  height: { type: Number, default: "" },
  age: { type: Number, default: "" },
  neckPerimeter: { type: Number, default: "" },
  hipPerimeter: { type: Number, default: "" },
  objectives: { type: String, default: "" },
  smoke: { type: String, default: "" },
  foodAllergies: { type: String, default: "" },

  // dietitian: { type: Schema.Types.ObjectId, ref: "Dietitian" },
  // food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  imageUrl: {
    type: String,
    default: "",
  },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],

  diet: {
    desayuno: [{ type: Schema.Types.ObjectId, ref: "Food" }],
    almuerzo: [{ type: Schema.Types.ObjectId, ref: "Food" }],
    comida: [{ type: Schema.Types.ObjectId, ref: "Food" }],
    merienda: [{ type: Schema.Types.ObjectId, ref: "Food" }],
    cena: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  },
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
