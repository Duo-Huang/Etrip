import { Request, Response, Router } from 'express';

const router = Router();

router.get('/list', (req: Request, res: Response) => {
    res.json('history list');
});

export default router;