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
// const medicalSeed = [
//   {
//     type: "Medical",
//     plan: "Medical Plan",
//     notes: "Medical Plan"
//   }
// ]

// db.Medical
//   .deleteMany({})
//   .then(() => db.Medical.collection.insertMany(medicalSeed))
//   .then(data => {
//     console.log(data.result.n + " MEDICAL records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });


// // FIRE EMERGENCY SEEDS
// // **********************************************
// const fireSeed = [
//   {
//     type: "Fire",
//     plan: "Fire Plan",
//     notes: "Fire Plan"
//   }
// ]

// db.Fire
//   .deleteMany({})
//   .then(() => db.Fire.collection.insertMany(fireSeed))
//   .then(data => {
//     console.log(data.result.n + " FIRE records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });


// EARTHQUAKE EMERGENCY SEEDS
// **********************************************
// const earthquakeSeed = [
//   {
//     type: "Earthquake",
//     plan: "Earthquake Plan",
//     notes: "Earthquake Plan"
//   }
// ]

// db.Earthquake
//   .deleteMany({})
//   .then(() => db.Earthquake.collection.insertMany(earthquakeSeed))
//   .then(data => {
//     console.log(data.result.n + " EARTHQUAKE records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

  // TORNADO EMERGENCY SEEDS
// **********************************************
const tornadoSeed = [
  {
    type: "Tornado",
    plan: "Tornado Plan",
    notes: "Tornado Plan"
  }
]

db.Tornado
  .deleteMany({})
  .then(() => db.Tornado.collection.insertMany(tornadoSeed))
  .then(data => {
    console.log(data.result.n + " EARTHQUAKE records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
