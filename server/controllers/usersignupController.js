async function createUserData() {
    const userData = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        gender: body.gender,
        skill: body.skill
    };
    await UserData(userData);
}
module.exports = { createUserData };