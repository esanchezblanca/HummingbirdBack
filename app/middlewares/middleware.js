const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../../config')

const checkToken = (req, res, next) => {
    if(!req.headers['user-token']) {
        return res.json({ error: 'Falta user token en la cabecera', status: 401});
    }

    const userToken = req.headers['user-token'];
    let payload = {};
    
    try{
        payload = jwt.decode(userToken, config.key);
    }catch(err){
        return res.json({error: 'Token incorrecto', status: 401});
    }

    if(payload.expiredAt < moment().unix()) {
        return res.json({error: 'Token expirado', status: 401});
    }
    
    req.usuarioId = payload.usuarioId;

    next();
}

module.exports = {
    checkToken: checkToken
}