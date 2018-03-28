import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/api/consulHours/add', async (req, res) => {
  if (
    req.body.consultation_start_time &&
    req.body.consultation_end_time &&
    req.body.consultation_place &&
    req.body.emp_id &&
    req.body.day
  ) {
    try {     
      const id = await Ctrl.addConsulHours(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully added consultation hours',

      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});





router.post('/api/consulHours/delete', async (req, res) => {
  try {
    const consultation = await Ctrl.getConsulHours(req.body);
    await Ctrl.removeConsulHours(req.body);
  
    res.status(200).json({
      status: 200,
      message: 'Successfully removed consulation hours',
      data: consultation
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Consultation hours not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});


export default router;
