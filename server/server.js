const express = require('express');
const chalk = require('chalk');
const config = require('./config');
const router = require('./router');
const { log } = require('./utils/commonFunc');

const app = new express();

app.use(config.BASE_URL, router);

app.listen(config.PORT, () => {
    log(chalk.green, 'Server is runing at ', config.PORT, ' !');
})