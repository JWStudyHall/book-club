const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  club: { type: mongoose.Schema.Types.ObjectId, ref: "Club" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  note: { type: String },
  rank: { type: Number },
});
