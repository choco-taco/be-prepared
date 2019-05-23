'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new mongoose.Schema({
  fullname: {type: String, required: true},
  username: { type: String, required: true },
  friends: [
    { type: mongoose.Schema.ObjectId, ref: 'User' }
  ]
})

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;