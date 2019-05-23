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
require('./config/passport')(passport);

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

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/move-to-repo", {useNewUrlParser: true, autoIndex: false, useFindAndModify: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Mongoose Connected")
});


// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Start the API server
app.listen(PORT, function () {
	console.log(`👻 ==> API Server now listening on PORT ${PORT}!`);
});
