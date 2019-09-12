import { Router } from 'express';
import * as userController from './controllers';
import { check, sanitize, validationResult } from "express-validator";
const router = Router();

router.post('/signup',[
    check("phoneNumber", "phoneNumber is not valid").isMobilePhone('zh-CN'),
    check("password", "Password must be at least 8 characters long").isLength({ min: 8 }),
], userController.postSignup);

router.post('/signin', userController.postSignin);

export default router;