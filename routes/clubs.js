const { Router } = require("express");
const controllers = require("../controllers/clubs.js");

const router = Router();

router.get("/", controllers.clubIndex);
router.get("/book/:bookId/new", controllers.clubNew);
router.post("/", controllers.createClub);
router.get("/userprofile", controllers.getProfile);
router.get("/:clubId", controllers.clubShow);
router.put("/:clubId/addmember", controllers.addMember);
router.delete("/:clubId", controllers.deleteClub);

module.exports = router;
