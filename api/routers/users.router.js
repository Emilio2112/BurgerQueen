const router = require("express").Router();
const { authUser, adminCheck } = require("../utils"); // Authenticated Route

const {
  getUserById,
  deleteUserById,
  updateUser,
  createUser,
  getFavoriteBurger,
  createFavoriteBurger,
  updateFavoriteBurger,
  getFavorite
} = require("../controllers/users.controllers");

router.get("/profile", authUser, getUserById);
router.post('/admin',authUser,adminCheck,createUser);
router.put("/profile",authUser, updateUser);
router.delete("/profile", authUser, deleteUserById);
router.get("/favorite", authUser, getFavoriteBurger);
router.get("/favorite/burger", authUser,getFavorite)
router.patch("/favorite/add", authUser, createFavoriteBurger);
router.patch("/favorite/remove", authUser, updateFavoriteBurger);
module.exports = router;
