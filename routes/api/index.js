const router = require("express").Router();
const contactRoutes = require("./contacts");
const emergencyRoutes = require("./emergency");
const userRoutes = require('./users')

// controller(router)

router.use("/contacts", contactRoutes);
router.use("/emergency", emergencyRoutes);
router.use("/user", userRoutes);
module.exports = router;
