import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// get a faculty grant by emp id
router.post('/api/facultygrant/viewEmp', async (req, res) => {
  if (req.body.id) {
    try {
      const facultygrant = await Ctrl.getAllFacultyGrantByEmp(req.body);
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
  } else {
    res.status(400).json({ status: 400, message: 'Bad Request' });
  }
});

// gets a faculty grant by id
router.get('/api/facultygrant/view', async (req, res) => {
  if (req.body.id) {
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
  } else {
    res.status(400).json({ status: 400, message: 'Bad Request' });
  }
});

// gets a faculty grant by id
router.get('/api/facultygrant/viewAll', async (req, res) => {
  try {
    const facultygrant = await Ctrl.getAllFacultyGrant(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all faculty grant',
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
  if (req.body) {
    try {
      const id = await Ctrl.addFacultyGrant(req.body);
      // const facultygrant = await Ctrl.getFacultyGrant({faculty_grant_id: id});

      res.status(200).json({
        status: 200,
        message: 'Successfully created faculty grant'
        // data: facultygrant
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
  if (req.body.emp_id && req.body.type) {
    try {
      await Ctrl.editFacultyGrant(req.body);
      // const facultygrant = await Ctrl.getAllFacultyGrantByEmp(req.body)({
      //   emp_id: req.body.emp_id
      // });

      res.status(200).json({
        status: 200,
        message: 'Successfully edited faculty grant'
        // data: facultygrant
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
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
