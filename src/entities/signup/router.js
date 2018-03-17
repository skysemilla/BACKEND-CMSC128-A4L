import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/api/signup', async (req, res) => {
  if (
    req.body.emp_id &&
    req.body.username &&
    req.body.emp_type &&
    req.body.department &&
    req.body.college &&
    req.body.rank
  ) {
    try {
     // await Ctrl.checkUser(req.body.empNo);
    // this checks if the empno is already assigned to a faculty     
      const id = await Ctrl.addSample(req.body);
      const sample = await Ctrl.getSample({ id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created sample',
        data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
