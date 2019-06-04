const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicalSchema = new Schema({
  type: { type: String, required: true },
  plan: { type: String, required: true },
  notes: { type: String, required: true }
});

const Medical = mongoose.model("Medical", medicalSchema);

module.exports = Medical;
