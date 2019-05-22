const router = require("express").Router();
const controller = require('./signin')
const contactRoutes = require("./contacts");
const emergencyRoutes = require("./emergency");

controller(router)

router.use("/contacts", contactRoutes);
router.use("/emergency", emergencyRoutes);

module.exports = router;
