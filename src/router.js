import { Router } from 'express';

// put import routers here
import authRouter from './entities/auth/router';
import extensionRouter from './entities/extension/router';
import publicationsRouter from './entities/publications/router';
import signupRouter from './entities/signup/router';
import studyRouter from './entities/studyload/router';
import teachRouter from './entities/teachload/router';
import facultyRouter from './entities/facultylist/router';
// import fsrRouter from './entities/fsrlist/router';
import adminWorkRouter from './entities/adminWork/router';
import consulHourRouter from './entities/consulHours/router';
import facultygrantRouter from './entities/facultygrant/router';
import limitedpracticeRouter from './entities/limitedpractice/router';
import profileRouter from './entities/profile/router';
import adminRouter from './entities/admin/router';

const router = Router();

// put use statements here
router.use('/', authRouter);
router.use(extensionRouter);
router.use(publicationsRouter);
router.use(signupRouter);
router.use(studyRouter);
router.use(teachRouter);
router.use(facultyRouter);
// router.use(fsrRouter);
router.use(adminWorkRouter);
router.use(consulHourRouter);
router.use(facultygrantRouter);
router.use(limitedpracticeRouter);
router.use(profileRouter);
router.use(adminRouter);

export default router;
