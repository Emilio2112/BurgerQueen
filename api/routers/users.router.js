const router = require("express").Router();
const { authUser } = require("../utils"); // Authenticated Route

const {
  getUserById,
  deleteUserById,
  updateUser,
} = require("../controllers/users.controllers");

router.get("/profile", authUser, getUserById);
router.put("/profile", authUser, updateUser);
router.delete("/profile", authUser, deleteUserById);

module.exports = router;
