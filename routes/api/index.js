const router = require("express").Router();
const controller = require('./signin')
const contactRoutes = require("./contacts");
const emergencyRoutes = require("./emergency");
const medicalRoutes = require("./medical");
const fireRoutes = require("./fire");
const earthquakeRoutes = require("./earthquake");
const tornadoRoutes = require("./tornado");

controller(router)

router.use("/contacts", contactRoutes);
router.use("/emergency", emergencyRoutes);
router.use("/medical", medicalRoutes);
router.use("/fire", fireRoutes);
router.use("/earthquake", earthquakeRoutes);
router.use("/tornado", tornadoRoutes);

module.exports = router;
