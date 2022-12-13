const mongoose = require("mongoose");
const Burger = require("../models/burger.model");
const Restaurant = require("../models/restaurants.model");

function getAllBurgers(req, res) {
  Burger.find()
    .then((burgers) => res.json(burgers))
    .catch((err) => res.json(err));
}

function getBurger(req, res) {
  Burger.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function getBurgerByStyle(req, res) {
  Burger.find({ style: req.params.style })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
}

async function createBurger(req, res) {
  try {
    const burger = await Burger.create(req.body);
    const rest = await Restaurant.findById(burger.restaurant);
    rest.burgers.push(burger.id)
    //guardar siempre los cambios
    await rest.save()
    //
    res.json(burger);
  } catch (error) {
    res.json(error);
  }
}

module.exports = {
  getAllBurgers,
  getBurger,
  getBurgerByStyle,
  createBurger,
};
