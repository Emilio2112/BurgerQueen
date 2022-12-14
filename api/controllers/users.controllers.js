const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const Burger = require("../models/burger.model");

module.exports = {
  getUserById,
  deleteUserById,
  updateUser,
  createUser,
  getFavoriteBurger,
  createFavoriteBurger,
  updateFavoriteBurger,
  getFavorite
};

function getUserById(req, res) {
  res.json(res.locals.user);
}

function updateUser(req, res) {
  const users = res.locals.user;
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  UserModel.findByIdAndUpdate(users, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function deleteUserById(req, res) {
  UserModel.findByIdAndDelete(res.locals.user.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function createUser(req, res) {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
}

function getFavoriteBurger(req, res) {
  UserModel.findById(res.locals.user.id)
    .populate("favorites")
    .then((result) => res.json(result.favorites))
    .catch((err) => res.json(err));
}

function createFavoriteBurger(req, res) {
  UserModel.findById(res.locals.user.id)
    .then((result) => {
      result.favorites.push(req.body.id);
      result.save().then((fav) => {
        res.json(result.favorites);
      });
    })
    .catch((err) => res.json(err));
}

function updateFavoriteBurger(req, res) {
  UserModel.findById(res.locals.user.id)
  .then(user => {
    let index = user.favorites.indexOf(req.body.id)
    user.favorites.splice(index, 1)
    user.save()
    res.json(user)
  })
    .catch((err) => res.json(err));
}

function getFavorite(req, res) {
  UserModel.findById(res.locals.user.id)
    .then((result) => res.json(result.favorites))
    .catch((err) => res.json(err));
}