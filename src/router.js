import { Router } from 'express';

// put import routers here
import authRouter from './entities/auth/router';
import extensionRouter from './entities/extensions/router';
import publicationsRouter from './entities/publications/router';
import signupRouter from './entities/signup/router';
import studyRouter from './entities/studyload/router';
import teachRouter from './entities/teachload/router';
import facultyRouter from './entities/facultylist/router';
//import fsrRouter from './entities/fsrlist/router';
import adminWorkRouter from './entities/adminWork/router';
import consulHourRouter from './entities/consulHours/router';

const router = Router();

// put use statements here
router.use('/', authRouter);
router.use(extensionRouter);
router.use(publicationsRouter);
router.use(signupRouter);
router.use(studyRouter);
router.use(teachRouter);
router.use(facultyRouter);
//router.use(fsrRouter);
router.use(adminWorkRouter);
router.use(consulHourRouter);

export default router;
