const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  desayuno: [{ type: String }],
  almuerzo: [{ type: String }],
  comida: [{ type: String }],
  merienda: [{ type: String }],
  cena: [{ type: String }],
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  client: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
