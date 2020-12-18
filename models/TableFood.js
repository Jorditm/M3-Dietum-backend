const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableFoodSchema = new Schema({
  desayuno: ["comida"],
  almuerzo: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  comida: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  merienda: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  cena: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  // food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  patient: [{ type: Schema.Types.ObjectId, ref: "Patient" }],
});

const TableFood = mongoose.model("TableFood", tableFoodSchema);
module.exports = TableFood;
