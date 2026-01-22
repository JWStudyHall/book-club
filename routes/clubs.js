const { Router } = require("express");
const controllers = require("../controllers/clubs.js");

const router = Router();

router.get("/", controllers.clubIndex);
router.get("/new", controllers.clubNew);

module.exports = router;
