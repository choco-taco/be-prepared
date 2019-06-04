const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const earthquakeSchema = new Schema({
  type: { type: String, required: true },
  plan: { type: String, required: true },
  notes: { type: String, required: true }
});

const Earthquake = mongoose.model("Earthquake", earthquakeSchema);

module.exports = Earthquake;
