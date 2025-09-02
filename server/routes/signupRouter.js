const express=require("express");
const router=express.Router();
const createUserData=require('../controllers/usersignupController')


router.post('/signup',(req,res)=>{
    const { firstName, lastName, email, password, gender, skill } = req.body;
    createUserData({ firstName, lastName, email, password, gender, skill })
        .then(() => res.status(201).json({ message: 'User created successfully' }))
        .catch((error) => res.status(500).json({ error: error.message }));
});

module.exports = router;
