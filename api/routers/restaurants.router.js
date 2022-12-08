
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

router.get('/:id', authUser, adminCheck, getRestaurantBurgers)
router.post('/', authUser, adminCheck, addRestaurant)
router.put('/:id', authUser, adminCheck, updateRestaurant)
router.delete('/:id', authUser, adminCheck, deleteRestaurant)


module.exports = router