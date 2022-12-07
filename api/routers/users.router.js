const router = require("express").Router();
const { authUser } = require("../utils"); // Authenticated Route

const {
  getUserById,
  deleteUserById,
  updateUser,
} = require("../controllers/users.controller");

router.get("/:email", authUser, getUserById);
router.put("/:email", authUser, updateUser);
router.delete("/:email", authUser, deleteUserById);

module.exports = router;
