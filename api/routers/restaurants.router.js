
const router = require('express').Router()

const {
  authUser,
  adminCheck
} = require('../utils') 

const { 
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurants,
  getRestaurantBurgers
} = require('../controllers/restaurants.controller')

router.get('/',  getRestaurants)
router.get('/:id', getRestaurant)
router.get('/restaurant/:id', getRestaurantBurgers)
router.post('/', authUser, adminCheck, addRestaurant)
router.put('/:id', authUser, adminCheck, updateRestaurant)
router.delete('/:id', authUser, adminCheck, deleteRestaurant)


module.exports = router