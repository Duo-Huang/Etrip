import express from 'express';
import userRouter from './user';

const Router = express.Router();

userRouter(Router);

export default Router;