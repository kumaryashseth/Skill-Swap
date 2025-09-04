const jwt = require("jsonwebtoken");

const generateToken = (id,role) => {
  console.log("hii")
  return jwt.sign({ id , 
role
   }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
