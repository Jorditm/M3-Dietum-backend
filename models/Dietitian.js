const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dietitianSchema = new Schema({
  name: { type: String },
  lastName: { type: String, default: "" },
  proName: { type: String, default: "" },
  email: {
    type: String,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    required: true,
    unique: true,
  },
  // genre: { type: String, default: "", enum: ["Male", "Female"] },
  password: { type: String, minlength: 6, required: true },
  //tableDiet: { type: Array },
  patients: [{ type: Schema.Types.ObjectId, ref: "Patient" }],
  tableFood: [{ type: Schema.Types.ObjectId, ref: "TableFood" }],
  isDietitian: { type: Boolean, default: true },
  meesage: [{ type: String, default: "" }],
});

const Dietitian = mongoose.model("Dietitian", dietitianSchema);
module.exports = Dietitian;
