const mongoose = require("mongoose");

// Database
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/be-preared-db"
);