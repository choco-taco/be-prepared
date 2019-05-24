<<<<<<< HEAD
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
=======
const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema({
    emergency: [{
        type: Schema.Types.ObjectId,
        ref:"Emergency"
    }
    ],
    contacts: [
        {
            type:Schema.Types.ObjectId,
            ref: "Contact"
        }
    ]
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan; 
>>>>>>> 152a00fcc7fe9f59b5a28fe5d80e4c864c4aabb7
