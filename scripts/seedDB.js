const mongoose = require("mongoose");
const db = require("../models");

// Database
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/be-prepared-db", { useNewUrlParser: true }
);

// ================================================
//                    MAIN SEED
// ================================================

// CONTACT SEEDS
// **********************************************
// const contactSeed = [
//   {
//     name: "Cami",
//     mobile: "123-456-7890",
//     address: "Neverland"
//   },
//   {
//     name: "Trevor",
//     mobile: "242-664-2382",
//     address: "Anywhere"
//   }
// ]

// db.Contact
//   .deleteMany({})
//   .then(() => db.Contact.collection.insertMany(contactSeed))
//   .then(data => {
//     console.log(data.result.n + " CONTACT records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// EMERGENCY SEEDS
// **********************************************
// const emergencySeed = [
//   {
//     type: "Fire",
//     plan: "Exit Building",
//     notes: "Test knobs"
//   }
// ]

// db.Emergency
//   .deleteMany({})
//   .then(() => db.Emergency.collection.insertMany(emergencySeed))
//   .then(data => {
//     console.log(data.result.n + " EMERGENCY records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// ================================================
//                  MEDICAL SEED
// ================================================

// MEDICAL CONTACT SEEDS
// **********************************************
// const contactSeed = [
//   {
//     name: "Cami",
//     mobile: "123-456-7890",
//     address: "Neverland"
//   },
//   {
//     name: "Trevor",
//     mobile: "242-664-2382",
//     address: "Anywhere"
//   }
// ]

// db.Contact
//   .deleteMany({})
//   .then(() => db.Contact.collection.insertMany(contactSeed))
//   .then(data => {
//     console.log(data.result.n + " CONTACT records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// MEDICAL EMERGENCY SEEDS
// **********************************************
const medicalSeed = [
  {
    type: "Medical",
    plan: "Medical Plan",
    notes: "Medical Plan"
  }
]

db.Medical
  .deleteMany({})
  .then(() => db.Medical.collection.insertMany(medicalSeed))
  .then(data => {
    console.log(data.result.n + " MEDICAL records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


