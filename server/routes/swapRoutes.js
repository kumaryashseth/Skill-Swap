const express = require("express");
const { createSwap, getSwaps, updateSwap, deleteSwap } = require("../controllers/swapController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/", protect, createSwap);

router.get("/", protect, getSwaps);

router.put("/:id", protect, updateSwap);

router.delete("/:id", protect, deleteSwap);

module.exports = router;
