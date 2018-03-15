import { Router } from 'express';

// put import routers here
import authRouter from './entities/auth/router';
import sampleRouter from './entities/sample/router';
import signupRouter from './entities/signup/router';

const router = Router();

// put use statements here
router.use('/', authRouter);
router.use(sampleRouter);
router.use(signupRouter);

export default router;
