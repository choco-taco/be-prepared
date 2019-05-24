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