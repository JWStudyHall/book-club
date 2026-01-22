const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desp: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
});

module.export = mongoose.model("Club", clubSchema);
