const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();

//setting server port 
const PORT = process.env.PORT || 3001;

// Passport Config
// require('./config/passport')(passport);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
app.use(express.json());



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/be-prepared-db", {useNewUrlParser: true, autoIndex: false, useFindAndModify: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Mongoose Connected")
});





// Start the API server
app.listen(PORT, function () {
	console.log(`👻 ==> API Server now listening on PORT ${PORT}!`);
});
