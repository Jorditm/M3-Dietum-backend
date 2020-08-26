const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, default: "" },
  email: {
    type: String,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    required: true,
    unique: true,
  },
  genre: { type: String, default: "", enum: ["Male", "Female"] },
  password: { type: String, minlength: 6, required: true },
  weight: { type: Number, default: "" },
  height: { type: Number, default: "" },
  age: { type: Number, default: "" },
  //tableDiet: { type: Array },
  doctor: { type: Schema.Types.ObjectId, ref: "Doctor" },
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  imageUrl: { type: String },
  desayuno: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  almuerzo: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  comida: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  merienda: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  cena: [{ type: Schema.Types.ObjectId, ref: "Food" }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
