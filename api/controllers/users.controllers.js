const { response } = require("express");
const UserModel = require("../models/users.model");
const { handleError } = require("../utils");

module.exports = {
  getUserById,
  deleteUserById,
  updateUser,
};

function getUserById(req, res) {
    res.json(res.locals.user)
}

function updateUser(req, res) {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  res.locals.user = req.body;
  res.locals.user
    .save()
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}

function deleteUserById(req, res) {
  UserModel.findByIdAndDelete(res.locals.user.id )
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}
