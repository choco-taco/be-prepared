const router = require("express").Router();
const fireController = require("../../controllers/fireController");

router.route("/")
  .get(fireController.findAll)
  .post(fireController.create);

  router
  .route("/:id")
  .get(fireController.findById)
  .put(fireController.update)
  .delete(fireController.remove);

module.exports = router;
