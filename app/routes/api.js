const router = require('express').Router();

const apiUsersRouter = require('./api/user')

router.use('/user', apiUsersRouter);

module.exports = router;