import { Router } from 'express';
import playerController from '../controllers/players';

const router = Router();

/* GET all players */
router.get('/', playerController.getPlayers);
/* GET player details. */
router.get('/:id', playerController.getPlayerInfos);

export default router;
