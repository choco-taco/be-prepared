const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },

});

//change this to 'plan'
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
