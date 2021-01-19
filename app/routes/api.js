const router = require('express').Router();


const middleware = require('../middlewares/middleware');
const apiUsersRouter = require('./api/user');
const apiTaskRouter = require('./api/task');


//Todas las rutas de task pasan antes por el middleware
router.use('/user', apiUsersRouter);
router.use('/task', middleware.checkToken, apiTaskRouter);


module.exports = router;