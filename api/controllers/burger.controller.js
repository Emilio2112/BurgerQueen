const mongoose = require('mongoose')
const Burger = require('../models/burger.model')

function getAllBurgers(req, res) {
    Burger
        .find()
        .then((burgers) => res.json(burgers))
        .catch((err) => res.json(err))
}

function getBurger(req, res) {
    Burger
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => res.json(err))
}

function getBurgerByStyle (req,res) {
    Burger
        .find({style: req.params.style})
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
}

function createBurger(req, res) {
    Burger
        .create(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
}

module.exports = {
    getAllBurgers,
    getBurger,
    getBurgerByStyle,
    createBurger
}