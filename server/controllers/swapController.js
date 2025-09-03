const Swap = require("../models/swapModel");


const createSwap = async (req, res) => {
  try {
    const { receiver, skillOffered, skillRequested } = req.body;

    const swap = await Swap.create({
      requester: req.user._id,
      receiver,
      skillOffered,
      skillRequested,
    });

    res.status(201).json(swap);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getSwaps = async (req, res) => {
  try {
    const swaps = await Swap.find({
      $or: [{ requester: req.user._id }, { receiver: req.user._id }],
    })
      .populate("requester", "name email")
      .populate("receiver", "name email")
      .populate("skillOffered")
      .populate("skillRequested");

    res.json(swaps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateSwap = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);

    if (!swap) return res.status(404).json({ message: "Swap not found" });
    if (swap.receiver.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    swap.status = req.body.status || swap.status;
    const updatedSwap = await swap.save();

    res.json(updatedSwap);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSwap = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);

    if (!swap) return res.status(404).json({ message: "Swap not found" });
    if (swap.requester.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    await swap.remove();
    res.json({ message: "Swap removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSwap, getSwaps, updateSwap, deleteSwap };
