const router = require('express').Router();

const { User } = require('../../../db');


//Método get de usuarios
router.get('/', async (req, res) =>{
    const users = await User.findAll();
    res.json(users);
});

//REGISTER
router.post('/', async (req, res) =>{
    const user = await User.create(req.body);
    res.json(user);
});

module.exports = router;