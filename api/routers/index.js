const router = require('express').Router()
const authRouter = require('./auth.router')
const burgerRouter = require('./burger.router')
const restaurantRouter = require('./restaurants.router')
const userRouter = require('./users.router')



router.use('/auth', authRouter)
router.use('/restaurants', restaurantRouter)
router.use('/burgers', burgerRouter)
router.use('/users', userRouter)

module.exports = router