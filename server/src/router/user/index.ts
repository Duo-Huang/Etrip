import { Request, Response, Router } from 'express';

export default (router: Router) => {

    router.post('/login', (req: Request, res: Response) => {
        res.json('hello, world');
    });

    router.get('/login', (req, res) => {
        res.json('hello, world');
    });

    router.get('/product/:id', (req: Request, res: Response) => {
        console.log(req.params.id);
        res.json(`product id is ${req.params.id}`);
    });

};