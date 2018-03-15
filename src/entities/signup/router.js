import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/api/signup', async (req, res) => {
  if (
    req.body.username &&
    req.body.password &&
    req.body.type &&
    req.body.emp_id
  ) {
    try {
      res.status(200).json({
        status: 200,
        message: 'Successfully created user',
        data: user
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
