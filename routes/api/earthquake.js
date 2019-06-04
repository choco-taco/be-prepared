const router = require("express").Router();
const earthquakeController = require("../../controllers/earthquakeController");

router.route("/")
  .get(earthquakeController.findAll)
  .post(earthquakeController.create);

  router
  .route("/:id")
  .get(earthquakeController.findById)
  .put(earthquakeController.update)
  .delete(earthquakeController.remove);

module.exports = router;
