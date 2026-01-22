const { Router } = require("express");
const controllers = require("../controllers/books.js")

const router = Router();

router.get("/", controllers.bookIndex);
router.get("/:bookId", controllers.bookShow)



module.exports = router;