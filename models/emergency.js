const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emergencySchema = new Schema({
  type: { type: String, required: true },
  plan: { type: String, required: true },
  notes: { type: String, required: true }
});

//change this to 'plan'
const Emergency = mongoose.model("Emergency", emergencySchema);

module.exports = Emergency;
