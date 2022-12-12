const router = require("express").Router();
const { authUser,adminCheck } = require("../utils"); // Authenticated Route

const {
  getUserById,
  deleteUserById,
  updateUser,
  createUser
} = require("../controllers/users.controllers");

router.get("/profile", authUser, getUserById);
router.post('/admin',authUser,adminCheck,createUser);
router.put("/profile",authUser,adminCheck, updateUser);
router.delete("/profile", authUser, deleteUserById);

module.exports = router;
