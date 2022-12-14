const router = require("express").Router();
const { authUser, adminCheck } = require("../utils"); // Authenticated Route

const {
  getUserById,
  deleteUserById,
  updateUser,
  createUser,
  getFavoriteBurguer,
  createFavoriteBurger,
  updateFavoriteBurger
} = require("../controllers/users.controllers");

router.get("/profile", authUser, getUserById);
router.post("/admin", authUser, adminCheck, createUser);
router.put("/profile", authUser, adminCheck, updateUser);
router.delete("/profile", authUser, deleteUserById);
router.get("/favorite", authUser, getFavoriteBurguer);
router.patch("/favorite/add", authUser, createFavoriteBurger);
router.patch("/favorite/remove", authUser, updateFavoriteBurger);
module.exports = router;
