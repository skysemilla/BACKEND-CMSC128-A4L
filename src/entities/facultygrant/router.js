import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// gets a faculty grant by id
router.post('/api/facultygrant/view', async (req, res) => {
  try {
    const facultygrant = await Ctrl.getFacultyGrant(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched faculty grant',
      data: facultygrant
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Faculty grant not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});


// add a faculty grant
router.post('/api/facultygrant/add', async (req, res) => {
  if (
    req.body.type &&
    req.body.is_approved &&
    req.body.professional_chair &&
    req.body.grants &&
    req.body.grant_title &&
    req.body.start_date &&
    req.body.end_date &&
    req.body.emp_id 
  ) {
    try {
      const id = await Ctrl.addFacultyGrant(req.body);
      const facultygrant = await Ctrl.getFacultyGrant({faculty_grant_id: id});

      res.status(200).json({
        status: 200,
        message: 'Successfully created faculty grant',
        data: facultygrant
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});



// removes a faculty grant
router.post('/api/facultygrant/delete', async (req, res) => {
  try {
    const facultygrant = await Ctrl.getFacultyGrant(req.body);
    await Ctrl.removeFacultyGrant(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed faculty grant',
      data: facultygrant
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Faculty grant not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

// edits a facultygrant
router.post('/api/facultygrant/edit', async (req, res) => {
  try {
    await Ctrl.editFacultyGrant(req.body);
    const facultygrant = await Ctrl.getFacultyGrant({
      id: req.body.faculty_grant_id
    });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited faculty grant',
      data: facultygrant
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Faculty grant not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;
