import { Router } from 'express';
import playersRouter from './players';

const router = Router();

/* GET players router. */
router.use('/players', playersRouter);

export default router;
