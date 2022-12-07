
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

router.get('/burgers', authUser, getRestaurantBurgers)
router.post('/', authUser, addRestaurant)
router.put('/', authUser, updateRestaurant)
router.delete('/', authUser, deleteRestaurant)


module.exports = router