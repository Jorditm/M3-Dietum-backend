const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: { type: String, required: true },
  date: { type: String, required: true },
  dietitian: { type: Schema.Types.ObjectId, ref: "Dietitian" },
  patient: { type: Schema.Types.ObjectId, ref: "Patient" },
});

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
