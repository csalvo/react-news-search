const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(articlessController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

router.route("/search")



module.exports = router;
