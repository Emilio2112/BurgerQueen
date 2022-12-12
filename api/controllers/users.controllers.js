const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt')


module.exports = {
  getUserById,
  deleteUserById,
  updateUser,
  createUser
};

function getUserById(req, res) {
    res.json(res.locals.user)
}

function updateUser(req, res) {
  const users= res.locals.user
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  UserModel
  .findByIdAndUpdate(users, req.body, {
    new: true
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function deleteUserById(req, res) {
  UserModel.findByIdAndDelete(res.locals.user.id )
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function createUser(req,res){
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  UserModel.create(req.body)
  .then((user)=> res.json(user))
  .catch((err) => res.json(err))
}