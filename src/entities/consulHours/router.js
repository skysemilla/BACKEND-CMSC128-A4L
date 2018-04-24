import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

//add a consultation hours
router.post('/api/consulHours/add', async (req, res) => {
  if (
    req.body.consultation_start_time &&
    req.body.consultation_end_time &&
    req.body.consultation_place &&
    req.body.day &&
    req.body.emp_id
  ) {
    try {
      const id = await Ctrl.addConsulHours(req.body);
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
router.post('/api/consulHours/delete', async (req, res) => {
  try {
    // const consultation = await Ctrl.getConsultation({ id: req.body.id });
    console.log(req.body);
    await Ctrl.removeConsulHours(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed consulation hours',
      data: []
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

//edit a consultation hours
router.post('/api/consulHours/edit', async (req, res) => {
  try {
    console.log(req.body);
    await Ctrl.editConsulHours(req.body);
    const consultation = await Ctrl.getConsultation({
      id: req.body.consultation_id
    });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited consultation hour',
      data: consultation
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

//view all consultation hours
router.get('/api/consulHours/viewAll', async (req, res) => {
  try {
    const consultations = await Ctrl.getAllConsulHours();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all consultations',
      data: consultations
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

router.post('/api/consulHours/view', async (req, res) => {
  try {
    const book = await Ctrl.getConsultation(req.body);
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

router.post('/api/consulHours/viewOne', async (req, res) => {
  try {
    const book = await Ctrl.getSpecificConsul(req.body);
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
