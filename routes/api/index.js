const router = require("express").Router();
const contactRoutes = require("./contacts");
const emergencyRoutes = require("./emergency");
const userRoutes = require('./users')
const medicalRoutes = require("./medical");
const fireRoutes = require("./fire");
const earthquakeRoutes = require("./earthquake");
const tornadoRoutes = require("./tornado");

// controller(router)
router.use("/contacts", contactRoutes);
router.use("/emergency", emergencyRoutes);
router.use("/user", userRoutes);
router.use("/medical", medicalRoutes);
router.use("/fire", fireRoutes);
router.use("/earthquake", earthquakeRoutes);
router.use("/tornado", tornadoRoutes);

module.exports = router;
