const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if(!req.headers['user-token']) {
        return res.json({ error: 'Falta user token en la cabecera'});
    }

    const userToken = req.headers['user-token'];
    let payload = {};
    
    try{
        payload = jwt.decode(userToken, 'secret');
    }catch(err){
        return res.json({error: 'Token incorrecto'});
    }

    if(payload.expiredAt < moment().unix()) {
        return res.json({error: 'Token expirado'});
    }
    
    req.usuarioId = payload.usuarioId;

    next();
}

module.exports = {
    checkToken: checkToken
}