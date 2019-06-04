const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tornadoSchema = new Schema({
  type: { type: String, required: true },
  plan: { type: String, required: true },
  notes: { type: String, required: true }
});

const Tornado = mongoose.model("Tornado", tornadoSchema);

module.exports = Tornado;
