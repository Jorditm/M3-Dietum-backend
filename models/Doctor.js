const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const docSchema = new Schema({
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
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  tableFood: [{ type: Schema.Types.ObjectId, ref: "TableFood" }],
});

const Doctor = mongoose.model("Doctor", docSchema);
module.exports = Doctor;
