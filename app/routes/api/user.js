const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../../db');
const { check, validationResult } = require('express-validator');

//Importación de librerías para crear el token y simplificar la intro. de fechas
const moment = require('moment');
const jwt = require('jwt-simple');
const middleware = require('../../middlewares/middleware');
const user = require('../../models/user');



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
            res.json({message: 'Usuario creado con éxito', status: 200});
        } else {
            res.json({message: 'Ha habido un error', status: 404});
        }
        
});


//Login
router.post('/Login', async (req, res) =>{
    const user = await User.findOne({where: { mail: req.body.mail} });
    
    if (user) {
        const sameMail = bcrypt.compareSync(req.body.password, user.password);
        if(sameMail){
            res.json({ success: createToken(user) })
        }else{
            res.json({ error: 'Las credenciales no son correctas', status: 401})
        }
    }else{
        res.json({ error: 'Las credenciales no son correctas', status: 401})
    }
});



//Get
//Cuando se llame a get no mostrará contraseñas ni siquiera encriptadas
router.get('/',  middleware.checkToken, async (req, res) =>{
    const users = await User.findAll(
        {
            attributes: {
                exclude: ['password']
            }
        }
    );
    res.json(users);
});



//Modify user
router.put('/:userId', async (req, res) =>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    await User.update(req.body, {
        where: { id: req.params.userId }
    });
    res.json({ success: 'Usuario modificado con éxito', status: 200})
});



//Delete user

router.delete('/:userId',  middleware.checkToken,async (req, res) =>{
    await User.destroy({
        where: {id: req.params.userId}
    });

    res.json({ success: 'Usuario eliminado', status: 200});
});



//Creación del token
const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(30, 'minutes').unix()
    }
    return jwt.encode(payload, 'secret');
}



module.exports = router;