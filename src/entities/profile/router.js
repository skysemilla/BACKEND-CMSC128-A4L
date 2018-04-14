import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// edits a sample
router.post('/api/faculty/edit', async (req, res) => {
  try {
    await Ctrl.editFaculty(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully edited faculty'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Faculty not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;
