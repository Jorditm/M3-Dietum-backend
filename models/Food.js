const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: String, required: true },
  energy: { type: Number, required: true },
  protein: { type: Number },
  carbs: { type: Number },
  fat: { type: Number },
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
