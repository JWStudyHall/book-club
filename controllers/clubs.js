const Club = require("../models/club.js");

const clubIndex = (req, res) => {
  res.render("clubs/index.ejs");
};
const clubNew = (req, res) => {
  res.render("clubs/new.ejs");
};

module.exports = {
  clubIndex,
  clubNew,
};
