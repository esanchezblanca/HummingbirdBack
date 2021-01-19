const router = require('express').Router();

const apiUsersRouter = require('./api/user')
const apiTaskRouter = require('./api/task')


router.use('/user', apiUsersRouter);
router.use('/task', apiTaskRouter);


module.exports = router;