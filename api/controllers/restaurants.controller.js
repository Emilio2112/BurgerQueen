const burgers = require("../models/burger.model");
const Restaurants = require("../models/restaurants.model");

function addRestaurant(req, res) {
  Restaurants.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
}

function updateRestaurant(req, res) {
  Restaurants.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
}

function deleteRestaurant(req, res) {
  Restaurants.findByIdAndDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
}

function getRestaurantBurgers(req, res) {
  Restaurants.findById(req.params.id)
    .populate("burgers")
    .then((result) => res.json(result.burgers))
    .catch((err) => res.json(err));
}

function getRestaurant(req, res) {
  Restaurants.find(req.query)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
}

module.exports = {
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantBurgers,
  getRestaurant,
};
