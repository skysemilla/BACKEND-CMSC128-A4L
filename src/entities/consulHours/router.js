import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

//add a consultation hours
router.post('/api/consultation/add', async (req, res) => {
  console.log(req.body);
  if (
    req.body.consultation_start_time &&
    req.body.consultation_end_time &&
    req.body.consultation_place &&
    req.body.day) {
    try {
      const id = await Ctrl.addConsulHours(req.body,req.session.user);
      res.status(200).json({
        status: 200,
        message: 'Successfully added consultation hours'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//delete a consultation hours
router.post('/api/consultation/delete', async (req, res) => {
  if (req.body.consultation_id){
    try {
      const consultation = await Ctrl.getConsultation(req.body);
      await Ctrl.removeConsultation(req.body);

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
  } else {
    res.status(400).json({status: 400, message: 'Bad request' });
  }
});

//edit a consultation hours
router.put('/api/consultation/edit', async (req, res) => {
  try {
    await Ctrl.editConsulHours(req.body);
    const positionEdited = await Ctrl.getConsultation({ id: req.body.id });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited consultation hour',
      data: positionEdited
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Service not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//view all consultation hours
router.get('/api/consultation/viewAll', async (req, res) => {
  try {
    const subjects = await Ctrl.getAllConsulHours();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all consultations',
      data: subjects
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

router.post('/api/consultation/view', async (req, res) => {
  try {
    const book = await Ctrl.getConsultation(req.session.user);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched consultation',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Consultation not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;
