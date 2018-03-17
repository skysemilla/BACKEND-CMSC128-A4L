import { Router } from 'express';

// put import routers here
import authRouter from './entities/auth/router';
import sampleRouter from './entities/sample/router';

const router = Router();

// put use statements here
router.use('/', authRouter);
router.use(sampleRouter);

export default router;
