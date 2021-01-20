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
  password: { type: String, minlength: 6, required: true },
  patients: [{ type: Schema.Types.ObjectId, ref: "Patient" }],
  isDietitian: { type: Boolean, default: true },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const Dietitian = mongoose.model("Dietitian", dietitianSchema);
module.exports = Dietitian;
