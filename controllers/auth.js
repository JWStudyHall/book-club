const User = require("../models/user.js");
const bcrypt = require("bcrypt");

// GET "/auth/register"
const register = (req, res) => {
  res.render("auth/register.ejs");
};

// POST "/auth/register"
const registerUser = async (req, res) => {
  // Make sure username is not already taken
  const userInDatabase = await User.findOne({ username: req.body.username });
  if (userInDatabase) {
    return res.send("Username already taken.");
  }

  // Make sure password and confirm password are the same
  if (req.body.password !== req.body.confirmPassword) {
    return res.send("Password and Confirm Password must match");
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  // Create our new user
  const user = await User.create({
    username: req.body.username,
    password: hashedPassword,
    avatar:
      "https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg",
  });

  // Manage Session
  req.session.user = {
    username: user.username,
    _id: user._id,
    avatar: user.avatar,
  };

  req.session.save(() => {
    res.redirect("/");
  });
};

// GET "/auth/login"
const login = (req, res) => {
  res.render("auth/login.ejs");
};

// POST "/auth/login"
const loginUser = async (req, res) => {
  // Make sure username is not already taken
  const userInDatabase = await User.findOne({ username: req.body.username });

  if (!userInDatabase) {
    return res.send("Login failed. Please try again");
  }

  // Compare userInDatabase's hashed password against Form Data password hashed by bcrypt
  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password,
  );

  if (!validPassword) {
    return res.send("Login failed. Please try again.");
  }

  // Manage Session
  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id,
    avatar: userInDatabase.avatar,
  };

  req.session.save(() => {
    res.redirect("/");
  });
};

// GET "/auth/sign-out"
const signOut = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

const editProfilePage = (req, res) => {
  res.render("auth/editprofile.ejs");
};

const editProfile = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.session.user._id,
    req.body,
  );

  req.session.user.avatar = updatedUser.avatar;

  res.redirect("/clubs/userprofile");
};

module.exports = {
  register,
  registerUser,
  login,
  loginUser,
  signOut,
  editProfilePage,
  editProfile,
};
