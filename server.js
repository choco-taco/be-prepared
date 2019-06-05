const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ======= passport needs ======= */

// Passport Config
require('./config/passport')(passport);

// Express session

app.use(session({
  genid: function(req) {
    return genuuid() // use UUIDs for session IDs
  },
  secret: 'banana',
  cookie: { secure: true },
  saveUninitialized: false, // don't create session until something stored
  resave: false, //don't save session if unmodified
  store: new MongoStore({
      url: 'mongodb://localhost/be-prepared-db',
      touchAfter: 24 * 3600 // time period in seconds
  })
}));

const sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false
}
 
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
 
app.use(session(sess))


// Passport middleware
app.use(passport.initialize());
app.use(passport.session())

// Connect flash
app.use(flash());

//================================

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/be-prepared-db", { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("Mongoose Connected")
});

// Start the API server
app.listen(PORT, function () {
  console.log(`👻  ==> API Server now listening on PORT ${PORT}!`);
});
