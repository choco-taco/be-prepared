const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const fs = require('fs');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// API Routes
router.use("/api", apiRoutes);

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('/'));

// Homepage
router.get('/home', ensureAuthenticated, (req, res, err) => {
  res.status(200).json({
    user: req.user
  })
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

// // If no API routes are hit, send the React app
router.get("*",function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
