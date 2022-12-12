
const router = require('express').Router()

const {
  authUser,
  adminCheck
} = require('../utils') 

const { 
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantBurgers,
  getRestaurant
} = require('../controllers/restaurants.controller')

router.get('/',  getRestaurant)
router.get('/:id', authUser, adminCheck, getRestaurantBurgers)
router.post('/', authUser, adminCheck, addRestaurant)
router.put('/:id', authUser, adminCheck, updateRestaurant)
router.delete('/:id', authUser, adminCheck, deleteRestaurant)


module.exports = router