const express = require('express');
const router = express.Router();
const userRouter = require('./user');

userRouter(router);

module.exports = router;