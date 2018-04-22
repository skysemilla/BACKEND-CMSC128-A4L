import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

const empidRegex = /^[0-9]{9}$/;

// gets one faculty
router.post('/api/faculty/view', async (req, res) => {
  if (req.body.id.match(empidRegex)) {
    try {
      const faculty = await Ctrl.getFaculty(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched faculty',
        data: faculty
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
  }
});

// gets all faculty
router.get('/api/faculty/viewAll', async (req, res) => {
  try {
    const faculty = await Ctrl.getAllFaculty();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all faculty',
      data: faculty
    });
  } catch (status) {
    let message = '';

    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
    }

    res.status(200).json({ status, message });
  }
});

export default router;
