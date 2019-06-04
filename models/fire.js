const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fireSchema = new Schema({
  type: { type: String, required: true },
  plan: { type: String, required: true },
  notes: { type: String, required: true }
});

const Fire = mongoose.model("Fire", fireSchema);

module.exports = Fire;
