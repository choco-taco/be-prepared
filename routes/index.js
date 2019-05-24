const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// API Routes
router.use("/api", apiRoutes);

// // Welcome Page
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// // Home Page
// router.get('/Home', ensureAuthenticated, (req, res) =>
//   res.render('dashboard', {
//     user: req.user
//   })
// );

module.exports = router;
