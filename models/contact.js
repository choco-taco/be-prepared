const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true }
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
