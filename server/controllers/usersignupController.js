const UserData = require("../models/userModel");

async function createUserData(body) {
  const userData = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
    gender: body.gender,
    skill: body.skill,
  };
  await UserData.create(userData);
}
module.exports = { createUserData };