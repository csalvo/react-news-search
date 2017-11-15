const router = require("express").Router();
const bookRoutes = require("./articles");

// Book routes
router.use("/saved", newsRoutes);

module.exports = router;
