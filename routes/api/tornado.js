const router = require("express").Router();
const tornadoController = require("../../controllers/tornadoController");

router.route("/")
  .get(tornadoController.findAll)
  .post(tornadoController.create);

  router
  .route("/:id")
  .get(tornadoController.findById)
  .put(tornadoController.update)
  .delete(tornadoController.remove);

module.exports = router;
