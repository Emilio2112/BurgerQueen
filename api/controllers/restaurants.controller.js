const Restaurants = require("../models/restaurants.model");
const burgers = require("../models/burger.model");

function addRestaurant() {
  try {
    Restaurants.create(req.body)
      .then((restaurant) => res.json(restaurant))
      .catch((err) => res.json(err));
  } catch (error) {
    return error;
  }
}

function updateRestaurant() {
  try {
    Restaurants.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  } catch (error) {
    return error;
  }
}

function deleteRestaurant() {
  try {
    Restaurants.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  } catch (error) {
    return error;
  }
}

function getRestaurantBurgers() {
  try {
    Restaurants.findById(req.params.id)
      .populate("burgers")
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  } catch (error) {
    return error;
  }
}

module.exports = {
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantBurgers
};
