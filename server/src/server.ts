import express from 'express';
import chalk from 'chalk';
import * as config from './config';
import router from './router';
import { log } from './utils/commonFunc';

const app = express();

app.use(config.BASE_URL, router);

app.listen(config.PORT, () => {
    log(chalk.green, 'Server is runing at ', config.PORT, '!');
});