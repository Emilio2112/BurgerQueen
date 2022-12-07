const UserModel = require("../models/users.model");
const { handleError } = require("../utils");

module.exports = {
  getUserById,
  deleteUserById,
  updateUser,
};

function getUserById(req, res) {
  UserModel.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}

function updateUser(req, res) {
  UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}
function deleteUserById(req, res) {
  UserModel.remove({ _id: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}
