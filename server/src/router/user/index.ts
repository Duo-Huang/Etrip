import { Request, Response, Router } from 'express';

export default (router: Router) => {

    router.post('/login', (req: Request, res: Response) => {
        res.json('hello, world');
    });

    router.get('/login', (req, res) => {
        res.json('hello, world');
    });

};