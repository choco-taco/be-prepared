const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const router = require("express").Router();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

//login route
router.use('/api/login',require('react-express-oauth-login-system/routes/loginsystem.js'));

var authenticate = require('react-express-oauth-login-system/authenticate.js')

// An api endpoint that returns a short list of items
router.get('/api/getList',authenticate, (req,res) => {
    var list = ["item1", "item2", "item3"];
    // note that res.user is available after authentication
    res.json([{items:list,user:res.user}]);
    console.log('Sent list of items');
});



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project");

// Start the API server
app.listen(PORT, function() {
  console.log(`👻  ==> API Server now listening on PORT ${PORT}!`);
});
