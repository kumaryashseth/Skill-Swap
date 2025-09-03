const Skill = require("../models/skillModel");

const createSkill = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    const skill = await Skill.create({
      name,
      description,
      category,
      user: req.user._id,
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().populate("user", "name email");
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) return res.status(404).json({ message: "Skill not found" });
    if (skill.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    skill.name = req.body.name || skill.name;
    skill.description = req.body.description || skill.description;
    skill.category = req.body.category || skill.category;

    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) return res.status(404).json({ message: "Skill not found" });
    if (skill.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    await skill.remove();
    res.json({ message: "Skill removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSkill, getSkills, updateSkill, deleteSkill };
