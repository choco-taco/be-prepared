const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const emergencySchema = new Schema({
  // user: {type: Schema.Types.ObjectId}, // this can be stored at plan creation 
  type: { type: String, required: true },
  plan: { type: String, required: true },
  notes: { type: String, required: true },
  contacts: [
    {
      type: Schema.Types.ObjectId, // talk about possibly using a plan id on contacts 
      ref: "Contact"
    }
  ]
});

const Emergency = mongoose.model("Emergency", emergencySchema);

module.exports = Emergency;
