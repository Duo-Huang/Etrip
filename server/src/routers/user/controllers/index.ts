import { Request, Response, NextFunction } from "express";
import { check, sanitize, validationResult } from "express-validator";

export const postSignup = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // const user = new User({
    //     email: req.body.email,
    //     password: req.body.password
    // });
    res.json('{signup}')
}

export const postSignin = (req: Request, res: Response, next: NextFunction) => {
    res.json('signin');
}