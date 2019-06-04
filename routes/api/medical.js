const router = require("express").Router();
const medicalController = require("../../controllers/medicalController");

router.route("/")
  .get(medicalController.findAll)
  .post(medicalController.create);

  router
  .route("/:id")
  .get(medicalController.findById)
  .put(medicalController.update)
  .delete(medicalController.remove);

module.exports = router;
