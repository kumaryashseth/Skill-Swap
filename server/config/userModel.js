const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skill: { type: String, required: true },
});

const userModel=mongoose.model('UserData',userSchema);

module.exports={userModel};