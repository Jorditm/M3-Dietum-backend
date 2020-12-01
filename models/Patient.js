const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, default: "" },
  email: {
    type: String,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    required: true,
    unique: true,
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

  //tableDiet: { type: Array },
  dietitian: { type: Schema.Types.ObjectId, ref: "Dietitian" },
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  // imageUrl: {
  //   type: String,
  //   default:
  //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffeedarmy.com%2Fkb%2Fhow-do-i-convert-a-google-merchant-test-feed-to-a-live-feed%2F&psig=AOvVaw2T1uBWfU_V-CT2SV707Np6&ust=1598556082943000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCJ99DLuesCFQAAAAAdAAAAABAD",
  // },
  desayuno: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  almuerzo: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  comida: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  merienda: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  cena: [{ type: Schema.Types.ObjectId, ref: "Food" }],
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
