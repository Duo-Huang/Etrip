import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import session from 'express-session';
import mongoose from 'mongoose';
import mongo from 'connect-mongo';
import { MONGODB_URI } from './utils/environment';
import logger, { registerApiLogger } from './utils/logger';
import * as config from './config/cantants';
import * as routers from './routers';

const MongoStore = mongo(session);
mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true } ).then(() => {
    logger.info('MongoDB connection successfully.');
}).catch(err => {
    logger.error('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    process.exit(1);
});

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.SESSION_SECRET,
    store: new MongoStore({
        url: MONGODB_URI,
        autoReconnect: true
    })
}));

app.use(registerApiLogger); // api base log

app.use(config.BASE_URL + '/me', routers.userRouter);
app.use(config.BASE_URL + '/history', routers.historyRouter);

export default app;