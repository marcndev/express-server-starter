import { Router } from 'express';
import AuthJWT from '../../middlewares/AuthJWT';

import * as UserControllers from './controllers';

const router = new Router();

router.get('/checkLogin', AuthJWT, UserControllers.checkLogin);
router.post('/login', UserControllers.login);
router.post('/logout', UserControllers.logout);

export default router;