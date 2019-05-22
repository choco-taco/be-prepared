const mongoose = require("mongoose");
const db = require("../models");

// Database
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/be-prepared-db"
);

const contactSeed = [
  {
    name: "Cami",
    mobile: "123-456-7890",
    address: "Neverland"
  },
  {
    name: "Trevor",
    mobile: "242-664-2382",
    address: "Anywhere"
  }
]

db.Contact
  .remove({})
  .then(() => db.Contact.collection.insertMany(contactSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
