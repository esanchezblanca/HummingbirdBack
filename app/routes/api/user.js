const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../../db');
const { check, validationResult } = require('express-validator');

//Register
router.post('/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('mail', 'El mail es obligatorio').isEmail()
] , async (req, res)=>{

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({errores: errors.array() })
        }

        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = User.create(req.body);
        if(user){
            res.json({message: 'User created', status: 200});
        } else {
            res.json({message: 'Something went wrong', status: 404});
        }
        
});

//Get
router.get('/', async (req, res) =>{
    const users = await User.findAll();
    res.json(users);
});

//Modify user
router.put('/:userId', async (req, res) =>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    await User.update(req.body, {
        where: { id: req.params.userId }
    });
    res.json({ success: 'User modified'})
});

//Delete user

router.delete('/:userId', async (req, res) =>{
    await User.destroy({
        where: {id: req.params.userId}
    });

    res.json({ success: 'User deleted'});
});

module.exports = router;