const { Router } = require("express");
const authRoutes = require("./auth.js");
const clubRoutes = require("./clubs.js");
const bookRoutes = require("./books.js");
const isSignedIn = require("../middleware/is-signed-in.js");

const router = Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.use("/auth", authRoutes);
router.use("/clubs", isSignedIn, clubRoutes);
router.use("/books", isSignedIn, bookRoutes);

module.exports = router;
