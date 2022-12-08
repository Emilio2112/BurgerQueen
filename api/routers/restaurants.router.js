
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

router.get('/:id', authUser, getRestaurantBurgers)
router.post('/', authUser, addRestaurant)
router.put('/:id', authUser, updateRestaurant)
router.delete('/:id', authUser, deleteRestaurant)


module.exports = router