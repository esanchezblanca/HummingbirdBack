const router = require('express').Router();


const middleware = require('../middlewares/middleware');
const apiUsersRouter = require('./api/user');
const apiTaskRouter = require('./api/task');
const apiCommentRouter = require('./api/comment');


//Todas las rutas de task pasan antes por el middleware
router.use('/user', apiUsersRouter);
router.use('/task', middleware.checkToken, apiTaskRouter);
router.use('/comment', middleware.checkToken, apiCommentRouter);


module.exports = router;