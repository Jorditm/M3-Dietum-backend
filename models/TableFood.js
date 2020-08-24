const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  client: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
