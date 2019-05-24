const router = require("express").Router();
const contactRoutes = require("./contacts");
const emergencyRoutes = require("./emergency");
const controller = require("./signin")

controller(router)
router.use("/contacts", contactRoutes);
router.use("/emergency", emergencyRoutes);

module.exports = router;
