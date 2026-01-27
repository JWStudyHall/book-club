const Club = require("../models/club.js");

const clubIndex = async (req, res) => {
  const clubData = await Club.find({}).populate("book");

  // console.log(clubData);

  res.render("clubs/index.ejs", {
    clubs: clubData,
  });
};

const clubNew = (req, res) => {
  res.render("clubs/new.ejs", {
    bookId: req.params.bookId,
  });
};

const createClub = async (req, res) => {
  await Club.create(req.body);
  res.redirect("/clubs");
};

const clubShow = async (req, res) => {
  const clubData = await Club.findById(req.params.clubId)
    .populate("book")
    .populate({
      path: "members",
      select: "username avatar",
    });
  // console.log(clubData);
  res.render("clubs/show.ejs", {
    club: clubData,
  });
};

const addMember = async (req, res) => {
  const club = await Club.findById(req.params.clubId);
  if (!club.members.includes(req.session.user._id)) {
    club.members.push(req.session.user._id);
    await club.save();
  }
  res.redirect(`/clubs/${club._id}`);
};

const getProfile = async (req, res) => {
  const clubs = await Club.find({
    $or: [{ owner: req.session.user._id }, { members: req.session.user._id }],
  }).populate("book");

  // console.log(clubs);

  res.render("clubs/profile.ejs", {
    clubs: clubs,
  });
};

const deleteClub = async (req, res) => {
  await Club.findByIdAndDelete(req.params.clubId);
  res.redirect("/clubs");
};

module.exports = {
  clubIndex,
  clubNew,
  createClub,
  clubShow,
  addMember,
  getProfile,
  deleteClub,
};
