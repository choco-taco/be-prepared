const router = require("express").Router();
const emergencyController = require("../../controllers/emergencyController");

router.route("/")
  .get(emergencyController.findAll)
  .post(emergencyController.create);

  router
  .route("/:id")
  .get(emergencyController.findById)
  .put(emergencyController.update)
  .delete(emergencyController.remove);

module.exports = router;
