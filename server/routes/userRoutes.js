const express = require("express");
const { getUsers, getUserProfile, updateUserProfile, deleteUser } = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();


router.get("/", protect, admin, getUsers);


router.get("/profile", protect, getUserProfile);


router.put("/profile", protect, updateUserProfile);


router.delete("/:id", protect, admin, deleteUser);

module.exports = router;
