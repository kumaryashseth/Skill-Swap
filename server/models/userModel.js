const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true,  },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  },
  { timestamps: true }
);

// Encrypt password before saving
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
});

// Match password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
