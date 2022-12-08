const router = require('express').Router()

const {
    getAllBurgers,
    getBurger,
    getBurgerByStyle,
    createBurger
} = require('../controllers/burger.controller')

const {
    adminCheck,
    authUser
} =require('../utils')

router.get('/',getAllBurgers)
router.get('/style/:style',getBurgerByStyle)
router.get('/:id',getBurger)
router.post('/',authUser,adminCheck,createBurger)

<<<<<<< HEAD
module.exports=router
=======
module.exports = router
>>>>>>> 7ac4403fda692db5a0e5256562c28e80e92a18ad
