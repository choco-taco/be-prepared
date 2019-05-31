const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const fs = require('fs');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// API Routes
router.use("/api", apiRoutes);

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.json('welcome'));

// Homepage
router.get('/home', ensureAuthenticated, (req, res) =>
  res.status(200).json({
    user: req.user
  })
);

// // If no API routes are hit, send the React app
router.get("*",function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
