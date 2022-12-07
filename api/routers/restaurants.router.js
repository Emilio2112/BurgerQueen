
const router = require('express').Router()

const {
  authUser,
  adminCheck
} = require('../utils') 

const { 
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantBurgers
} = require('../controllers/restaurants.controller')

router.get('/restaurant/burgers', authUser, getRestaurantBurgers)
router.post('/restaurant', authUser, addRestaurant)
router.put('/restaurant', authUser, updateRestaurant)
router.delete('/restaurant', authUser, deleteRestaurant)