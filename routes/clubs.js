const { Router } = require("express");
const controllers = require("../controllers/clubs.js");

const router = Router();

router.get("/", controllers.clubIndex);
router.get("/book/:bookId/new", controllers.clubNew);
router.post("/", controllers.createClub);
router.get("/:clubId", controllers.clubShow);
router.put("/:clubId/addmember", controllers.addMember)

module.exports = router;
